# Use the official Node.js image with npm
FROM node:16.20.2-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies using npm
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Expose the build output directory
VOLUME /app/build

# Specify the command to run the server
CMD ["npm", "start"]