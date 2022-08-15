FROM node:16.15.1-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml tailwind.config.js ./

RUN npm install -g pnpm
RUN pnpm install

COPY . .
