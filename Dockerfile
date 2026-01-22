FROM node:18-alpine

WORKDIR /app

COPY . .
RUN npm install --omit dev
RUN npm run compile

CMD ["node", "lib/main.js"]
