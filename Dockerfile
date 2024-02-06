FROM node:18-alpine
WORKDIR /app
 
COPY rabbitmq.conf /etc/rabbitmq/
COPY . .
RUN npm install
ENV RABBITMQ_NODENAME=rabbit@localhost
EXPOSE 5000
EXPOSE 80