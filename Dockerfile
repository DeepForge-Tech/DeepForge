FROM node:18-alpine
WORKDIR /app
COPY . .
RUN apk add --no-cache bash
RUN chmod +x run.sh
CMD ["bash","./run.sh"]
EXPOSE 80
EXPOSE 8080
EXPOSE 3000
EXPOSE 3001
EXPOSE 3002