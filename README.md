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

---
###  Live Ap Demo
## Home Route -Phone 
![phonhomeRoute](https://github.com/user-attachments/assets/9025e9c7-b8b1-4e6b-8026-653d51276183)
## Docs Route -Tablet
![tabletDocsRoute](https://github.com/user-attachments/assets/60ce279e-e136-4277-9ff0-183f5cb8bcac)

## Logs At Render.com (Worker.js)
![RenderLogs](https://github.com/user-attachments/assets/e5d3c9b0-0e93-4725-b0e4-c7305e1da088)

![Renderlogs2](https://github.com/user-attachments/assets/b8e06c2d-02c7-4f40-8e22-ff38cdf27b2a)

## Redis Queue Logs (upstach.io)
![RedisLog](https://github.com/user-attachments/assets/2ec8b27e-2dfe-4e71-9860-6d27e571eb59)

## Emails Screenshots
![FakeEmail](https://github.com/user-attachments/assets/d73e4e84-8fd6-4c5b-b655-4a72955c4622)

![EmailDetails](https://github.com/user-attachments/assets/7a86dc17-b03b-468a-a45e-9e609ec255e2)

## test.js For alll of this works

![testScript](https://github.com/user-attachments/assets/a125a696-ede7-4869-8045-5f6b3ab250ec)

## 🙌 Contributing
Feel free to fork, open issues, or submit pull requests! 😊


