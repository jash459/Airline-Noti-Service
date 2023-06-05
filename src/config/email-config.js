const nodemailer = require("nodemailer");

const { GMAIL_PASS, GAMIL_EMAIL } = require("./server-config");

const mailsender = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: GAMIL_EMAIL,
    pass: GMAIL_PASS,
  },
});

module.exports = mailsender;
