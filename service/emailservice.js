const nodemailer = require("nodemailer");
const { generateOTP } = require('otpcaptchagenerator');

const otp = generateOTP(4);

const sendEmail = async (receiverEmail) => {
    try {
        if (!receiverEmail) {
            throw new Error("Receiver email is required");
        }

        
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
            subject: "OTP from banvo.com",
            body: `Your OTP is ${otp}. Please don't share it with anyone. This is secure.Bullmq 🐂`
        };

        const info = await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${receiverEmail}:`, info.response);
    } catch (error) {
        console.error("Error sending email:", error.message);
    }
};

module.exports = { sendEmail };
