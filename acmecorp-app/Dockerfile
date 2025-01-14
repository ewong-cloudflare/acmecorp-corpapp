# Base on offical Node.js Alpine image
FROM node:alpine

# Set working directory
WORKDIR /usr/app

# Install PM2 globally
RUN npm install --global pm2

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./

# Install dependencies
RUN npm ci -only=prod && npm cache clean --force

# Copy all files
COPY ./ ./

# Initialize prisma client
RUN npx prisma generate 

# Build app
RUN npm run build

# Expose the listening port
EXPOSE 3000

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node

# Give permission to node user
COPY --chown=node:node . .

# Run npm start script with Prisma migration and seeding, PM2 when container starts
CMD ["npm", "run", "start:resetseedandmigrate:prod"]