const express = require("express");
const { Queue } = require("bullmq");
const { Redis } = require("ioredis");
require("dotenv").config();
const rateLimit = require("express-rate-limit");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 7777;

const redisConnection = new Redis(process.env.REDIS_URL, {
    maxRetriesPerRequest: null,
});

// Rate Limiting (7 requests per minute per IP)
const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 700, 
    message: { error: "Too many requests, please try again later." },
});
app.use(limiter);


// Producer at api level
const emailQueue = new Queue("email-queue", { connection: redisConnection });


app.get("/", (req, res) => {
    res.send(`<h1>Welcome to BullMQ 🐂 Email Queue Service!</h1>`);
});

app.post("/send-email", async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(400).json({ error: "Email is required" });
        //Add Job in Queue
        await emailQueue.add("sendEmail", { email });
        return res.status(200).json({ message: "Email job added to queue" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


app.get("/docs", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>BullMQ API Documentation</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f4f4f4; }
                .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1); }
                h1, h2 { color: #333; }
                code { background: #eee; padding: 4px; border-radius: 4px; }
                pre { background: #222; color: white; padding: 10px; border-radius: 4px; overflow-x: auto; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>BullMQ 🐂 API Documentation</h1>
                <p>This API provides a job queue system using <strong>BullMQ</strong> and Redis.</p>

                <h2>📌 Home Route</h2>
                <p><strong>GET /</strong> - Returns a simple welcome message.</p>

                <h2>📬 Send Email Job</h2>
                <p><strong>POST /send-email</strong></p>
                <p><strong>Request Body:</strong></p>
                <pre>{
    "email": "user@example.com"
}</pre>
                <p><strong>Response:</strong></p>
                <pre>{
    "message": "Email job added to queue"
}</pre>

                <h2>📄 API Documentation</h2>
                <p><strong>GET /docs</strong> - Displays this API documentation.</p>

                <h2>⚠️ Rate Limiting</h2>
                <p>Each IP can send up to <strong>7 requests per minute</strong>. Exceeding this will return:</p>
                <pre>{
    "error": "Too many requests, please try again later."
}</pre>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
