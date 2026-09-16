# Stage 1 - Build Portfolio

# Use Node.js image to build the application
FROM node:20-alpine AS build

# Create and set the working directory
WORKDIR /lerat_jordan_final_site

# Copy package files first to leverage Docker caching
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Generate a production Create React App build
RUN npm run build

# Stage 2 - Serve Production Build

# Use a lightweight nginx image to host the static files
FROM nginx:alpine

# Copy the React build into Nginx's web directory
COPY --from=build /lerat_jordan_final_site/build /usr/share/nginx/html

# Nginx serves web traffic internally on port 80
EXPOSE 80

# Start nginx and keep the container running
CMD ["nginx", "-g", "daemon off;"]