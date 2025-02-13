const nodemailer = require("nodemailer");
const { generateOTP } = require("otpcaptchagenerator");
require("dotenv").config();

const sendEmail = async (receiverEmail) => {
    try {
        if (!receiverEmail) {
            throw new Error("Receiver email is required");
        }

        const otp = generateOTP(4);

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: receiverEmail,
            subject: "🔐 Your OTP Code from Banvo.com",
            text: `Your OTP is ${otp}. Please don't share it with anyone. This is secure. BullMQ 🐂`,
            html: `<p>Your OTP is <strong>${otp}</strong>. Please don't share it with anyone.</p>
                   <p>This is secure. <b>BullMQ 🐂</b></p>`,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log(`✅ Email sent successfully to ${receiverEmail}:`);
    } catch (error) {
        console.error("❌ Error sending email:", error.message);
    }
};

module.exports = { sendEmail };
