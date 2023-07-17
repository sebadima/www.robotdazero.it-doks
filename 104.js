const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const log = console.log;

var mailgun_user    = process.env.MAILGUN_USER;
var mailgun_api_key = process.env.MAILGUN_API_KEY;
var mailgun_from = process.env.MAILGUN_FROM;
var mailgun_to = process.env.MAILGUN_TO;

console.log("utente: %s", mailgun_user);

//import nodemailer from 'nodemailer';

async function main() {
 // create reusable transporter object using the default SMTP transport
 let transporter = nodemailer.createTransport({
   host: "smtp.eu.mailgun.org",
   port: 587,
   auth: {
     user: mailgun_user,
     pass: mailgun_api_key,
   },
 });

 // send mail with defined transport object
 let info = await transporter.sendMail({
   from: mailgun_from,
   to: mailgun_to,
   subject: "ore 1629Hello",
   text: "ciao ciao Testing some Mailgun awesomness"
 });

 console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);
