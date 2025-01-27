"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const sendEmail = async (name: string, email: string, message: string) => {
  const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Message from Portfolio</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f7fc;
            color: #333;
          }
  
          .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 25px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }
  
          h1 {
            color: #4caf50;
            font-size: 28px;
            margin-bottom: 20px;
            text-align: center;
            font-weight: bold;
          }
  
          p {
            font-size: 16px;
            line-height: 1.6;
            margin: 10px 0;
            color: #555;
          }
  
          .highlight {
            font-weight: bold;
            color: #4caf50;
          }
  
          .message {
            background-color: #f9f9f9;
            padding: 15px;
            border-radius: 5px;
            margin-top: 20px;
            border-left: 5px solid #4caf50;
          }
  
          .footer {
            margin-top: 30px;
            font-size: 14px;
            color: #777;
            text-align: center;
          }
  
          .footer a {
            color: #4caf50;
            text-decoration: none;
          }
  
          .footer a:hover {
            text-decoration: underline;
          }
  
          .email-details {
            font-size: 14px;
            color: #777;
            margin-top: 15px;
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid #eee;
          }
  
          .email-details a {
            color: #4caf50;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>New Message from Portfolio</h1>
  
          <p>You have received a new message from your portfolio contact form. Below are the details:</p>
  
          <p><span class="highlight">Name:</span> ${name}</p>
          <p><span class="highlight">Email:</span> ${email}</p>
  
          <div class="message">
            <p><span class="highlight">Message:</span></p>
            <p>${message}</p>
          </div>
  
          <div class="email-details">
            <p>This email was sent from <a href="mailto:${email}">${email}</a>. Please reply accordingly.</p>
          </div>
  
          <div class="footer">
            <p>Be Safe Davi!</p>
          </div>
        </div>
      </body>
    </html>
  `;

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "aieta.davi@gmail.com",
    subject: `Message from portfolio!`,
    html: htmlTemplate,
  });
};

export default sendEmail;
