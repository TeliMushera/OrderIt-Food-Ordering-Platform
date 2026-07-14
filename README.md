# 🍔 MERN Eats - Food Delivery App

A full-stack **MERN Food Delivery Application** that allows users to browse restaurants, order food, manage their profile, and receive AI-powered dish descriptions and restaurant review insights.

## 🚀 Features

### User
- User registration and login with JWT authentication
- Profile management with avatar upload
- Browse restaurants and menus
- Add items to cart
- Place food orders

### Admin
- Manage restaurants
- Manage menus and food items
- View and manage orders

### AI Features
- Generate detailed dish descriptions
- Analyze restaurant reviews and summarize customer sentiment

### Other Features
- Cloudinary image uploads
- Stripe payment integration (ready for implementation)

---

# 🛠️ Tech Stack

### Frontend
- React
- Vite
- React Router
- Redux Toolkit
- Axios
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Express File Upload
- Cloudinary
- Stripe

### AI
- GROQ API
- Llama 3.1 8B Instant

---

# 📁 Project Structure

```
MERN-Eats/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── services/
│   ├── config/
│   ├── app.js
│   └── server.js
│
└── frontend/
    ├── src/
    ├── public/
    └── vite.config.js
```

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repository.git

cd your-repository
```

## 2. Install Dependencies

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd ../frontend
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **backend** folder.

```env
PORT=
DB_URI=
JWT_SECRET=
JWT_EXPIRES_IN=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

GROQ_API_KEY=

STRIPE_SECRET_KEY=

FRONTEND_URL=
```

Create another `.env` file inside the **frontend** folder.

```env
VITE_API_URL=http://localhost:4000
```

---

# ▶️ Run the Project

### Start Backend

```bash
cd backend
npm run dev
```

### Start Frontend

```bash
cd frontend
npm run dev
```

The frontend runs on:

```
http://localhost:5173
```

---

# 🤖 AI Features

The application uses the **GROQ API** with the **Llama 3.1 8B Instant** model to:

- Generate food descriptions
- Generate dish tags
- Analyze restaurant reviews
- Summarize customer feedback

---

# ☁️ Image Upload

User profile images are uploaded using:

- Express File Upload
- Cloudinary

---

# 💳 Payments

The project includes Stripe integration hooks.

To enable payments, add your Stripe Secret Key in the backend `.env` file.

---

# 🚀 Deployment

### Frontend

Deploy on:

- Vercel
- Netlify

Set

```env
VITE_API_URL=<Backend URL>
```

### Backend

Deploy on:

- Render
- Railway
- Heroku

Add all required environment variables before deployment.

---

# 🔒 Security

- Do not commit `.env` files.
- Keep API keys private.
- Restrict CORS to trusted domains.
- Rotate keys if they are exposed.

---

# 📌 Main Files

### Backend

- `app.js` – Express configuration
- `server.js` – Server entry point
- `controllers/` – Business logic
- `routes/` – API routes
- `models/` – MongoDB schemas
- `services/` – AI services

### Frontend

- `src/utils/api.js` – Axios configuration
- `src/redux/` – State management
- `src/components/` – React components