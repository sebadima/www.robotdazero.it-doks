const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const log = console.log;

var mailgun_user    = process.env.MAILGUN_USER;
var mailgun_api_key = process.env.MAILGUN_API_KEY;
var mailgun_from    = process.env.MAILGUN_FROM;
var mailgun_to      = process.env.MAILGUN_TO;

console.log("utente: %s", mailgun_user);

async function main() {
 let transporter = nodemailer.createTransport({
   host: "smtp.eu.mailgun.org",
   port: 587,
   auth: {
     user: mailgun_user,
     pass: mailgun_api_key,
   },
 });

 let info = await transporter.sendMail({
   from: mailgun_from,
   to: mailgun_to,
   subject: "ore da CF1629Hello",
   text: "ciao ciao Testing some Mailgun awesomness"
 });

 console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);

export async function onRequestPost(context) {
  try {
    let input = await context.request.formData();

    // Convert FormData to JSON
    // NOTE: Allows multiple values per key
    let output = {};
    for (let [key, value] of input) {
      let tmp = output[key];
      if (tmp === undefined) {
        output[key] = value;
      } else {
        output[key] = [].concat(tmp, value);
      }
    }

    let pretty = JSON.stringify(output, null, 2);
    return new Response(pretty, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
  } catch (err) {
    return new Response('Error parsing JSON content', { status: 400 });
  }
}



/*

const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const log = console.log;

var mailgun_user    = process.env.MAILGUN_USER;
var mailgun_api_key = process.env.MAILGUN_API_KEY;
var mailgun_from    = process.env.MAILGUN_FROM;
var mailgun_to      = process.env.MAILGUN_TO;

console.log("utente: %s", mailgun_user);

async function main() {
 let transporter = nodemailer.createTransport({
   host: "smtp.eu.mailgun.org",
   port: 587,
   auth: {
     user: mailgun_user,
     pass: mailgun_api_key,
   },
 });

 let info = await transporter.sendMail({
   from: mailgun_from,
   to: mailgun_to,
   subject: "ore 1629Hello",
   text: "ciao ciao Testing some Mailgun awesomness"
 });

 console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);

*/
