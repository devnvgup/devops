# Todo List Fullstack Project

Dự án Todo List đơn giản với React.js (Frontend) và Node.js + MongoDB (Backend).

## Cấu trúc dự án

```
devops/
├── todolist-api/     # Backend API (Node.js + Express + MongoDB)
└── todolist-app/     # Frontend (React.js)
```

## Yêu cầu

- Node.js (v14 trở lên)
- MongoDB (đã cài đặt và chạy trên localhost:27017)
- npm hoặc yarn

## Cài đặt và chạy

### 1. Backend API

```bash
cd todolist-api
npm install
```

Tạo file `.env` trong thư mục `todolist-api`:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/todolist
```

Chạy server:
```bash
npm start
# hoặc với nodemon (tự động restart khi có thay đổi)
npm run dev
```

API sẽ chạy tại: `http://localhost:5000`

### 2. Frontend React App

```bash
cd todolist-app
npm install
npm start
```

App sẽ chạy tại: `http://localhost:3000`

## Tính năng

- ✅ Thêm todo mới
- ✅ Xem danh sách todos
- ✅ Sửa todo
- ✅ Xóa todo
- ✅ Đánh dấu hoàn thành/chưa hoàn thành

## API Endpoints

- `GET /api/todos` - Lấy tất cả todos
- `GET /api/todos/:id` - Lấy todo theo ID
- `POST /api/todos` - Tạo todo mới
- `PUT /api/todos/:id` - Cập nhật todo
- `DELETE /api/todos/:id` - Xóa todo

## Lưu ý

- Đảm bảo MongoDB đã được cài đặt và chạy trước khi start API
- Nếu MongoDB chạy trên port khác, cập nhật `MONGODB_URI` trong file `.env`




┌────────────────┐
│  Developer     │
│ (Frontend/BE)  │
└───────┬────────┘
        │ git push
        ▼
┌──────────────────────────┐
│ GitHub / GitLab          │
│ (Source Code Repository) │
└───────┬──────────────────┘
        │ Webhook
        ▼
┌──────────────────────────┐
│ Jenkins (CI/CD Pipeline) │
└───────┬──────────────────┘
        │
        │ 1. Pull source code
        │ 2. Run test (optional)
        │ 3. Build Frontend
        │ 4. Build Backend
        ▼
┌──────────────────────────┐
│ Docker Build             │
│ (Frontend & Backend)     │
└───────┬──────────────────┘
        │
        │ docker build
        │ docker tag
        ▼
┌──────────────────────────┐
│ AWS ECR                  │
│ (Docker Image Registry)  │
└───────┬──────────────────┘
        │
        │ docker push
        ▼
┌──────────────────────────┐
│ Kubernetes Deploy Step   │
│ (kubectl / helm)         │
└───────┬──────────────────┘
        │
        │ apply deployment.yaml
        │ apply service.yaml
        ▼
┌─────────────────────────────────────────┐
│ AWS EKS (Kubernetes Cluster)             │
│                                         │
│  ┌────────────┐    ┌────────────┐       │
│  │ Frontend   │    │ Backend    │       │
│  │ Pod x N    │    │ Pod x M    │       │
│  └─────┬──────┘    └─────┬──────┘       │
│        │ Service          │ Service      │
│        └──────────┬───────┘              │
│                   ▼                      │
│             Kubernetes Service           │
│                   │                      │
│                Ingress                   │
└───────────────────┬─────────────────────┘
                    │
                    ▼
┌──────────────────────────┐
│ AWS Load Balancer (ALB)  │
└───────┬──────────────────┘
        │
        ▼
┌──────────────────────────┐
│        End User          │
│      (Browser)          │
└──────────────────────────┘




