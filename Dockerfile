FROM node:alpine

WORKDIR /code

COPY package*.json ./

RUN npm ci --only=production

COPY . .

RUN npm run build --production

EXPOSE 3000

CMD ["npx", "serve", "-s", "build", "-l", "3000"]