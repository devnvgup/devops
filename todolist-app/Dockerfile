# Frontend Dockerfile - Multi-stage build

# Stage 1: Build React app
FROM node:18-alpine AS builder

WORKDIR /app

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL


# Copy package.json first
COPY package.json ./

# Cài đặt dependencies (sẽ tự tạo package-lock.json nếu cần)
RUN npm install

# Copy source code
COPY . .

# Build React app
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Copy built files từ builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80


# Start nginx
CMD ["nginx", "-g", "daemon off;"]

