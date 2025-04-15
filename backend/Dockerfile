# Use Node.js 18
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy backend source code
COPY backend/ .

# Expose backend port
EXPOSE 4000

# Start the backend server
CMD ["npm", "start"]