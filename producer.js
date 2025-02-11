const { Queue } = require('bullmq');
const { Redis } = require('ioredis');
const { generateOTP } = require('otpcaptchagenerator');

const redisConnection = new Redis({
    host: '127.0.0.1', 
    port: 6379
});

const otp = generateOTP(4);
const notificationQueue = new Queue('email-queue', { connection: redisConnection }); 

async function addToQueue() {
    const result = await notificationQueue.add('email to kashyap', {
        email: 'prajapatikashyap14@gmail.com',
        subject: 'OTP from banvo.com',
        body: `Your OTP is ${otp}. Please don't share it with anyone. This is secure.`
    });

    console.log('Job Added to Queue', result.id);
}

addToQueue();
