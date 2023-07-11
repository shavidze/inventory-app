# Use an official Node.js runtime as the base image
FROM node:18.3.0

# Set the working directory in the container to /server-app
WORKDIR /server-app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application's dependencies in the container
RUN npm install

# Copy the rest of the application's code to the working directory
COPY . .

# Expose port 3000 for the application
EXPOSE ${APP_PORT}

# Define the command to run the application
CMD [ "npm", "start" ]
