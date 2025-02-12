// const { Queue } = require('bullmq');
// const { Redis } = require('ioredis');


// const redisConnection = new Redis({
//     host: '127.0.0.1', 
//     port: 6379
// });

// // 
// const notificationQueue = new Queue('email-queue', { connection: redisConnection }); 

// async function addToQueue() {
//     const result = await notificationQueue.add('email to kashyap', {
//         email: 'prajapatikashyap14@gmail.com',
//         subject: 'OTP from banvo.com',
//         body: `Your OTP is ${otp}. Please don't share it with anyone. This is secure.Bullmq 🐂`
//     });

//     console.log('Job Added to Queue', result.id);
// }

// addToQueue();
