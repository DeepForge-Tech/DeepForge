FROM rabbitmq:3.8.0-management
WORKDIR /app
COPY rabbitmq.conf /etc/rabbitmq/

ENV RABBITMQ_NODENAME=rabbit@localhost

RUN chown rabbitmq:rabbitmq /etc/rabbitmq/rabbitmq.conf

USER rabbitmq:rabbitmq
RUN apt update -y && apt upgrade -y
RUN apt install nodejs npm -y
COPY . .
RUN npm install
CMD ["npm","install"]