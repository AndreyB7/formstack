"use strict";
import nodemailer from 'nodemailer';

const smtpConfig = {
  email: process.env.SMTP_EMAIL,
  appPass: process.env.SMTP_APP_PASS
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: smtpConfig.email,
    pass: smtpConfig.appPass
  }
});

export const sendMail = async (to: string, subject: string, html: string): Promise<void> => {

  const mailOptions = {
    from: smtpConfig.email,
    to: to,
    subject: subject,
    html: html,
  };

  return transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
      console.log(info);
    }
  });
}
