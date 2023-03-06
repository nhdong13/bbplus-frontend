### Project: BedBank Plus

## Getting Started

First, run the development server:

(Node version > 16.18.0)
```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

Before deploy to staging (branch: dev)
```bash
git checkout dev
npm build
```

Before deploy to production (branch: main)
```bash
git checkout main
npm build
```

Deployment:
```bash
vercel login
vercel deploy
```
