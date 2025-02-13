FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .


RUN npm install -g pm2

CMD ["pm2-runtime", "start", "ecosystem.config.js"]
