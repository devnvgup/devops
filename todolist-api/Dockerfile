# Backend Dockerfile
FROM node:18-alpine

# Tạo thư mục làm việc
WORKDIR /app

# Copy package.json first
COPY package.json ./

# Cài đặt dependencies (production only)
RUN npm install --only=production

# Copy source code
COPY . .

# Expose port
EXPOSE 5000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:5000/', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start server
CMD ["node", "server.js"]

