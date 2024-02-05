FROM rabbitmq:3.8.0-management
WORKDIR /app
RUN apt update -y && apt upgrade -y
RUN apt-get update &&  apt-get install -y ca-certificates curl gnupg
RUN apt-get update &&  apt-get install nodejs npm -y
RUN npm install express@4.17.3 amqplib@0.10.3 dotenv@16.4.1 pg@8.7.3 postgres@0.0.2 socket.io@4.7.4
COPY rabbitmq.conf /etc/rabbitmq/
COPY . .
ENV RABBITMQ_NODENAME=rabbit@localhost

RUN chown rabbitmq:rabbitmq /etc/rabbitmq/rabbitmq.conf

USER rabbitmq:rabbitmq

CMD ["npm","start"]

