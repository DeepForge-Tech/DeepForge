# Use an official Node.js 18 image as the base image
FROM rabbitmq:latest

# Set the working directory to /app
WORKDIR /app

RUN apt update -y && apt upgrade -y
RUN apt install nodejs npm -y



# Copy the application code to the container
COPY . .
# Install the required dependencies
RUN npm install
# Expose the port that the application will run on
EXPOSE 80
EXPOSE 5000
EXPOSE 443
# Start the application
# CMD ["npm", "start"]