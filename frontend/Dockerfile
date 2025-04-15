# Use official Node.js image as base (upgraded to 18 for compatibility)
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy frontend source code
COPY frontend/ .

# Build the frontend
RUN npm run build

# Install serve to serve the build
RUN npm install -g serve

# Expose frontend port
EXPOSE 3000

# Serve the frontend from the dist directory
CMD ["serve", "-s", "dist", "-l", "3000"]