FROM rabbitmq:3.8.0-management
WORKDIR /app
RUN apt update -y && apt upgrade -y
RUN apt install nodejs npm -y
RUN npm install
COPY rabbitmq.conf /etc/rabbitmq/
COPY . .
ENV RABBITMQ_NODENAME=rabbit@localhost

RUN chown rabbitmq:rabbitmq /etc/rabbitmq/rabbitmq.conf

USER rabbitmq:rabbitmq

CMD ["npm","start"]