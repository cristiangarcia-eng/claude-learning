import NextAuth from "next-auth";
import Nodemailer from "next-auth/providers/nodemailer";
import { UnstorageAdapter } from "@auth/unstorage-adapter";
import { createStorage } from "unstorage";
import upstashRedisDriver from "unstorage/drivers/upstash";
import { createTransport } from "nodemailer";
import { seedAllowList, isAllowed } from "./allowlist";

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
      from: `"Claude10x" <${process.env.GMAIL_USER}>`,
      async sendVerificationRequest({ identifier: email, url, provider }) {
        const transport = createTransport(provider.server);
        await transport.sendMail({
          to: email,
          from: provider.from,
          subject: "Your Claude10x access link",
          text: `Sign in to Claude10x: ${url}`,
          html: `
            <div style="max-width:480px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;padding:40px 24px;">
              <h1 style="font-size:28px;font-weight:700;margin:0 0 8px;color:#111;">
                Claude<span style="color:#22c55e;">10x</span>
              </h1>
              <p style="color:#666;font-size:15px;margin:0 0 32px;">
                Your access link is ready
              </p>
              <a href="${url}" style="display:inline-block;background:#22c55e;color:#fff;font-size:15px;font-weight:600;padding:12px 32px;border-radius:8px;text-decoration:none;">
                Enter the course
              </a>
              <p style="color:#999;font-size:13px;margin:32px 0 0;">
                This link expires in 24 hours. If you didn't request this, ignore this email.
              </p>
            </div>
          `,
        });
      },
    }),
  ],
  pages: {
    signIn: "/login",
    verifyRequest: "/login?sent=true",
  },
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false;
      await seedAllowList();
      return isAllowed(user.email);
    },
  },
});
