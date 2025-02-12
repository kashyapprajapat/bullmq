const { Worker } = require("bullmq");
const { Redis } = require("ioredis");
const { sendEmail } = require("./service/emailservice"); 

const redisConnection = new Redis({
    host: "127.0.0.1",
    port: 6379,
    maxRetriesPerRequest: null,
});



const worker = new Worker(
    "email-queue",
    async (job) => {
        console.log(`I got a job & its id is: ${job.id}`);
        console.log("Processing Message...");
        
        const receiverEmail = job.data.email; 
        console.log(`Sending Email to ${receiverEmail}`);

        
        await sendEmail(receiverEmail);

        console.log("Email 📨 Sent Successfully ✅");
    },
    { connection: redisConnection }
);

console.log("Worker is running and listening for email jobs...");
