FROM node:24 AS builder

WORKDIR /app

RUN npm install -g pnpm

COPY package.json  ./
COPY pnpm-lock.yaml ./
RUN pnpm install

COPY . .
RUN pnpm run build

FROM node:24

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --only=production

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main.js"]
