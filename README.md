# N.T. LEAGUE

Responsive Next.js leaderboard for Neizha Trading League.

## Run locally

```bash
npm install
npm run dev
```

## Vercel

Import this repository into Vercel. The framework preset will be detected as Next.js.

## Secure admin and permanent data

The included screens use demonstration records so the design works immediately. Create a free Supabase project, copy `.env.example` to `.env.local`, and add the project URL and anon key. The production admin authorization must check `ADMIN_EMAIL=marcneizha@gmail.com` on the server. Supabase should store challenges, contestants, daily balances, updates, and uploaded files.

Never commit `.env.local` or secret keys.
