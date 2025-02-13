const express = require("express");
const { Queue } = require("bullmq");
const { Redis } = require("ioredis");
require("dotenv").config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 7777;

const redisConnection = new Redis(process.env.REDIS_URL, {
    maxRetriesPerRequest: null,
});

// Producer at api level
const emailQueue = new Queue("email-queue", { connection: redisConnection });


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



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
