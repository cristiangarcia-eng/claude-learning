import NextAuth from "next-auth";
import Nodemailer from "next-auth/providers/nodemailer";
import { UnstorageAdapter } from "@auth/unstorage-adapter";
import { createStorage } from "unstorage";
import upstashRedisDriver from "unstorage/drivers/upstash";

const storage = createStorage({
  driver: upstashRedisDriver({
    url: process.env.KV_REST_API_URL!,
    token: process.env.KV_REST_API_TOKEN!,
  }),
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: UnstorageAdapter(storage),
  providers: [
    Nodemailer({
      server: {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      },
      from: process.env.GMAIL_USER,
    }),
  ],
  pages: {
    signIn: "/login",
    verifyRequest: "/login?sent=true",
  },
  callbacks: {
    async signIn({ user }) {
      const allowed = (process.env.ALLOWED_EMAILS || "")
        .split(",")
        .map((e) => e.trim().toLowerCase());
      return allowed.includes(user.email?.toLowerCase() ?? "");
    },
  },
});
