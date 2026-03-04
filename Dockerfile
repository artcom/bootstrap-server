FROM node:18-alpine

ENV PORT=3000
RUN apk add --no-cache curl

WORKDIR /app

COPY . .
RUN npm install --omit dev
RUN npm run compile

CMD ["node", "lib/main.js"]

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD curl -f http://localhost:${PORT}/.health
