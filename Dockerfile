FROM node:18-buster
WORKDIR /app
COPY . .
RUN apk add --no-cache bash
RUN chmod +x run.sh
CMD ["bash","./run.sh"]
EXPOSE 80
EXPOSE 5000