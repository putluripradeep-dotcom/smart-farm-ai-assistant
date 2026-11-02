# Smart Farm Knowledge Assistant

A full-stack smart farm web app with:

- Farmer login and signup
- Crop and farm profile management
- Crop image records
- Fertilizer and pesticide reminders
- AI-powered assistant
- Crop calendar
- Expense calculator
- Weather updates
- Disease detection dashboard
- Multi-language farmer profile support

## Tech stack

Frontend:
- React + Vite
- CSS modules / custom CSS

Backend:
- Node.js
- Express.js
- MongoDB-ready models

## Project structure

```bash
smart-farm-ai-assistant/
├── frontend/
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
├── backend/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── README.md
└── .gitignore
```

## Backend setup

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

## Frontend setup

```bash
cd frontend
npm install
npm run dev
```

## Default login

There is a demo login flow in the frontend for quick testing; the backend API supports signup/login. For production use, configure MongoDB and secure JWT secrets.

## Environment variables

Use the values in `backend/.env.example`.

## Notes

- Weather feature uses OpenWeather API if configured.
- AI assistant uses OpenAI if configured; otherwise it falls back to smart local farming advice rules.
- Disease detection is a demo endpoint that simulates prediction and treatment guidance.

## Next step

Open the frontend in the browser and visit the app to sign up and explore the dashboard.
