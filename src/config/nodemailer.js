import nodemailer from "nodemailer";

const senderEmail = process.env.CONTACT_EMAIL_SENDER;
const receiverEmail = process.env.CONTACT_EMAIL_RECEIVER;
const pass = process.env.CONTACT_PASS;

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: senderEmail,
        pass,
    },
});

export const mailOptions = {
    from: senderEmail,
    to: receiverEmail,
};