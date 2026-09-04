import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: "admin@lavanillasupplier.com",
    pass: process.env.SMTP_PASSWORD,
  },
});

interface InquiryEmail {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  product: string;
  quantity?: string;
  region: string;
  message: string;
}

export async function sendInquiryEmail(inquiry: InquiryEmail) {
  const productLabels: Record<string, string> = {
    "vanilla-beans": "Vanilla Beans",
    "vanilla-paste": "Vanilla Paste",
    "vanilla-powder": "Vanilla Powder",
    custom: "Custom Formulation",
  };

  const regionLabels: Record<string, string> = {
    uae: "UAE / Middle East",
    australia: "Australia",
    usa: "USA",
    europe: "Europe",
    asia: "Asia Pacific",
    other: "Other",
  };

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #2C2518; padding: 20px; text-align: center;">
        <h1 style="color: #B5A37A; margin: 0; font-size: 20px;">New Inquiry</h1>
      </div>
      <div style="padding: 20px; background-color: #f9f9f9;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Name:</td>
            <td style="padding: 8px 0; color: #555;">${inquiry.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td>
            <td style="padding: 8px 0; color: #555;"><a href="mailto:${inquiry.email}">${inquiry.email}</a></td>
          </tr>
          ${inquiry.company ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Company:</td><td style="padding: 8px 0; color: #555;">${inquiry.company}</td></tr>` : ""}
          ${inquiry.phone ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Phone:</td><td style="padding: 8px 0; color: #555;">${inquiry.phone}</td></tr>` : ""}
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Product:</td>
            <td style="padding: 8px 0; color: #555;">${productLabels[inquiry.product] || inquiry.product}</td>
          </tr>
          ${inquiry.quantity ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Quantity:</td><td style="padding: 8px 0; color: #555;">${inquiry.quantity}</td></tr>` : ""}
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Region:</td>
            <td style="padding: 8px 0; color: #555;">${regionLabels[inquiry.region] || inquiry.region}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333; vertical-align: top;">Message:</td>
            <td style="padding: 8px 0; color: #555;">${inquiry.message}</td>
          </tr>
        </table>
      </div>
      <div style="padding: 10px 20px; background-color: #2C2518; text-align: center;">
        <p style="color: #B5A37A; margin: 0; font-size: 12px;">La Vanilla Supplier — Inquiry System</p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: '"La Vanilla Supplier" <admin@lavanillasupplier.com>',
    to: "admin@lavanillasupplier.com",
    replyTo: inquiry.email,
    subject: `New Inquiry: ${inquiry.name} — ${productLabels[inquiry.product] || inquiry.product}`,
    html,
  });
}
