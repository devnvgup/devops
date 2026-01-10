# Docker Setup Guide

Hướng dẫn build và chạy ứng dụng Todo List với Docker.

## Yêu cầu

- Docker
- Docker Compose

## Cấu trúc

```
devops/
├── todolist-api/          # Backend API
│   ├── Dockerfile
│   └── .dockerignore
├── todolist-app/          # Frontend React
│   ├── Dockerfile
│   └── .dockerignore
└── docker-compose.yml     # Docker Compose config
```

## Cách sử dụng

### 1. Build và chạy với Docker Compose (Khuyến nghị)

```bash
# Build và start tất cả services
docker-compose up --build

# Chạy ở background
docker-compose up -d --build

# Xem logs
docker-compose logs -f

# Stop services
docker-compose down

# Stop và xóa volumes (xóa data MongoDB)
docker-compose down -v
```

Sau khi chạy:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- MongoDB: localhost:27017

### 2. Build và chạy từng service riêng lẻ

#### Backend API

```bash
cd todolist-api

# Build image
docker build -t todolist-api .

# Chạy container
docker run -d \
  -p 5000:5000 \
  -e MONGODB_URI=mongodb://localhost:27017/todolist \
  --name todolist-backend \
  todolist-api
```

#### Frontend

```bash
cd todolist-app

# Build image
docker build -t todolist-app .

# Chạy container
docker run -d \
  -p 3000:80 \
  -e REACT_APP_API_URL=http://localhost:5000 \
  --name todolist-frontend \
  todolist-app
```

## Environment Variables

### Backend (.env hoặc docker-compose.yml)

- `PORT`: Port cho API server (mặc định: 5000)
- `MONGODB_URI`: MongoDB connection string

### Frontend

- `REACT_APP_API_URL`: URL của backend API (mặc định: http://localhost:5000)

## Troubleshooting

### Kiểm tra containers đang chạy

```bash
docker ps
```

### Xem logs

```bash
# Tất cả services
docker-compose logs

# Service cụ thể
docker-compose logs backend
docker-compose logs frontend
docker-compose logs mongodb
```

### Rebuild lại images

```bash
docker-compose build --no-cache
docker-compose up -d
```

### Xóa tất cả containers và images

```bash
docker-compose down -v
docker rmi todolist-api todolist-app
```





