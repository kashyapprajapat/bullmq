# 🚀 BullMQ Email Queue Service 🐂

A **Node.js** and **Express.js** API for **queueing email jobs** using **BullMQ** and **Redis**.  
It includes **rate limiting**, **HTML API documentation**, and **job queue management**.

## ✨ Features
- **BullMQ 🐂** - Handles email jobs efficiently using Redis.
- **Rate Limiting** - Limits requests to **7 per minute per IP**.
- **REST API** - Endpoints to add jobs and view documentation.
- **HTML Documentation** - Accessible at `/docs`.
- **Environment Variables** - Uses `.env` for credentials.

---

## 📦 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/bullmq-email-queue.git
   cd bullmq-email-queue
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up a Redis instance (e.g., using Docker):
   ```sh
   docker run -d --name redis-server -p 6379:6379 redis
   ```
4. Create a .env file:
```sh
PORT=7777
REDIS_URL=redis://localhost:6379
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
``` 

5. Start the server
```sh
npm run start
```

## 🛠 Built With
Node.js

Express.js

BullMQ

Redis

Nodemailer

Rate Limiting (express-rate-limit)


## 🙌 Contributing
Feel free to fork, open issues, or submit pull requests! 😊


