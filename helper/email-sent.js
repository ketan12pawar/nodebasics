const nodemailer = require("nodemailer");
async function emailHandler(user, otp, sub) {
  console.log("calling", user, otp, sub);
  console.log(
    "proces.env.smtp_port",
    process.env.SMTP_HOST,
    process.env.SMTP_PORT,
    process.env.SMTP_USER,
    process.env.SMTP_PASS
  );
  const transport = nodemailer.createTransport({
    //smtp
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  const info = await transport.sendMail({
    from: process.env.SMTP_USER,
    to: `${user},khushi02pawar@gmail.com`,
    subject: sub,
    html: `<b>hello   user your otp is ${otp}. please do not share with anyone and close it. </b>`,
  });
  return info;
}

module.exports = emailHandler;
