FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm i 

# Copy app source code
COPY . .

# Build app
RUN npm run build 
RUN npm migration:run


# Expose port
EXPOSE 3333

# Start app
CMD ["node", "./build/bin/server.js"]