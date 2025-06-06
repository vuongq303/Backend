const nodemailer = require("nodemailer");

const emailTrans = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vuongq303@gmail.com",
    pass: "mqnu jofj habh ytws",
  },
});

module.exports = emailTrans;
