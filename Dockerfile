FROM node:18-buster

WORKDIR /app

COPY package.json package-lock.json ./

COPY . .

RUN npm install

CMD ["npm", "start"]