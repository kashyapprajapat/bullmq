const { Worker } = require('bullmq'); 
const { Redis } = require('ioredis');

const redisConnection = new Redis({
    host: '127.0.0.1',
    port: 6379,
    maxRetriesPerRequest:null,
});

const sendEmail = async () => { 
    let sum = 0;
    for (let index = 1; index < 100000; index++) {
        sum = sum + index;
    }
};

const worker = new Worker('email-queue', async (job) => { 
    console.log(`I got job & its id is: ${job.id}`);
    console.log('Processing Message');
    console.log(`Sending Email to ${job.data.email}`);
    await sendEmail();
    console.log('Email 📨 Sent Successfully ✅');
},{ connection: redisConnection });



