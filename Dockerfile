# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine as production
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./

# Install only production dependencies (including a simple server)
RUN npm install -g serve

# Expose the port your app will run on
EXPOSE 3000

# Command to run the app
CMD ["serve", "-s", "dist", "-l", "3000"]
