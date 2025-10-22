FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --legacy-peer-deps

COPY . .

# Build the production bundle
RUN npm run build

# Install a production server
RUN npm install -g serve

EXPOSE 3000

# Serve the production build
CMD ["serve", "-s", "build", "-l", "3000"]