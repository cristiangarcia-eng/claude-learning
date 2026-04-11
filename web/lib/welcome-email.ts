import { createTransport } from "nodemailer";
import type { Tier } from "./user-tier";

const COURSE_URL = "https://claude10x.com/login";
const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "#";

function getTransport() {
  return createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

export async function sendWelcomeEmail(email: string, tier: Tier) {
  const transport = getTransport();
  const isMentoring = tier === "mentoring";

  const subject = isMentoring
    ? "Welcome to Claude10x + Mentoring!"
    : "Welcome to Claude10x!";

  const mentoringBlock = isMentoring
    ? `
      <div style="background:#0a1a0f;border:1px solid #22c55e30;border-radius:12px;padding:24px;margin:28px 0;">
        <p style="font-size:15px;font-weight:700;color:#22c55e;margin:0 0 8px;">
          Your Mentoring Session
        </p>
        <p style="color:#ccc;font-size:14px;line-height:1.6;margin:0 0 16px;">
          You have a 2-hour personal session with Cristian. Pick a time that works for you — the sooner the better, so you can apply what you learn in real time.
        </p>
        <a href="${CALENDLY_URL}" style="display:inline-block;background:transparent;color:#22c55e;font-size:14px;font-weight:600;padding:10px 24px;border-radius:8px;text-decoration:none;border:1px solid #22c55e50;">
          Schedule Your Session &rarr;
        </a>
      </div>
    `
    : "";

  const html = `
    <div style="max-width:520px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;padding:0;background:#0d0d0d;">
      <!-- Header with glow -->
      <div style="padding:48px 32px 32px;text-align:center;background:linear-gradient(180deg,#0a1a0f 0%,#0d0d0d 100%);">
        <h1 style="font-size:32px;font-weight:800;margin:0 0 4px;color:#fff;">
          Claude<span style="color:#22c55e;">10x</span>
        </h1>
        <p style="color:#22c55e;font-size:13px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;margin:0;">
          ${isMentoring ? "Course + Mentoring" : "Course Access"}
        </p>
      </div>

      <!-- Body -->
      <div style="padding:8px 32px 40px;">
        <p style="color:#fff;font-size:22px;font-weight:700;margin:0 0 16px;line-height:1.3;">
          You're in. Let's go.
        </p>

        <p style="color:#aaa;font-size:15px;line-height:1.7;margin:0 0 8px;">
          You just made one of the best investments in your career. In the next few hours, you'll go from "I don't use the terminal" to confidently using AI to do things that used to require a developer.
        </p>

        <p style="color:#aaa;font-size:15px;line-height:1.7;margin:0 0 28px;">
          This isn't another course you'll forget about. It's a hands-on system — every lesson builds on the last, and by the end, you'll have real skills you use every single day.
        </p>

        <!-- What's inside -->
        <div style="background:#111;border-radius:12px;padding:24px;margin:0 0 28px;">
          <p style="font-size:14px;font-weight:700;color:#fff;margin:0 0 16px;">What's waiting for you:</p>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:6px 0;color:#22c55e;font-size:14px;width:24px;vertical-align:top;">&#10003;</td>
              <td style="padding:6px 0;color:#ccc;font-size:14px;">20+ lessons from zero to advanced workflows</td>
            </tr>
            <tr>
              <td style="padding:6px 0;color:#22c55e;font-size:14px;width:24px;vertical-align:top;">&#10003;</td>
              <td style="padding:6px 0;color:#ccc;font-size:14px;">Hands-on exercises with real data</td>
            </tr>
            <tr>
              <td style="padding:6px 0;color:#22c55e;font-size:14px;width:24px;vertical-align:top;">&#10003;</td>
              <td style="padding:6px 0;color:#ccc;font-size:14px;">Hands-on exercises with real-world scenarios</td>
            </tr>
            <tr>
              <td style="padding:6px 0;color:#22c55e;font-size:14px;width:24px;vertical-align:top;">&#10003;</td>
              <td style="padding:6px 0;color:#ccc;font-size:14px;">Skills, agents, MCP, hooks — the full toolkit</td>
            </tr>
            <tr>
              <td style="padding:6px 0;color:#22c55e;font-size:14px;width:24px;vertical-align:top;">&#10003;</td>
              <td style="padding:6px 0;color:#ccc;font-size:14px;">Lifetime access — learn at your own pace</td>
            </tr>
          </table>
        </div>

        ${mentoringBlock}

        <!-- CTA -->
        <div style="text-align:center;margin:32px 0;">
          <a href="${COURSE_URL}" style="display:inline-block;background:#22c55e;color:#000;font-size:16px;font-weight:700;padding:14px 40px;border-radius:10px;text-decoration:none;">
            Access the Course
          </a>
          <p style="color:#666;font-size:12px;margin:12px 0 0;">
            Use this email (${email}) to log in
          </p>
        </div>

        <!-- Tip -->
        <div style="border-top:1px solid #222;padding-top:24px;margin-top:32px;">
          <p style="color:#888;font-size:13px;line-height:1.6;margin:0;">
            <strong style="color:#aaa;">Pro tip:</strong> Start with the first lesson today. Even 15 minutes will show you why this changes everything. The course is designed so you can go from zero to productive in a single weekend.
          </p>
        </div>
      </div>

      <!-- Footer -->
      <div style="padding:24px 32px;border-top:1px solid #1a1a1a;text-align:center;">
        <p style="color:#444;font-size:12px;margin:0;">
          Claude<span style="color:#22c55e;">10x</span> &middot; Master Claude Code without writing code
        </p>
      </div>
    </div>
  `;

  await transport.sendMail({
    to: email,
    from: `"Claude10x" <${process.env.GMAIL_USER}>`,
    subject,
    text: `Welcome to Claude10x! Access your course at ${COURSE_URL}${isMentoring ? ` and schedule your mentoring session at ${CALENDLY_URL}` : ""}`,
    html,
  });
}
