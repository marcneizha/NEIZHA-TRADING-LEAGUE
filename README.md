# N.T. Analytics

Educational market-analysis dashboard for XAUUSD and EURUSD with a TradingView chart, private Google-authenticated analysis lab, AI structured readings, Supabase signal history, and optional email delivery.

## Setup

1. Run `supabase/schema.sql` for a fresh Supabase project.
2. Run `supabase/analysis-upgrade.sql` in Supabase SQL Editor.
3. Add the required values from `.env.example` to Vercel Environment Variables.
4. Enable Google in Supabase Authentication and keep `ADMIN_EMAIL` restricted to the approved administrator.
5. Redeploy after environment settings change.

## Required Vercel settings

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `ADMIN_EMAIL`
- `OPENAI_API_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (server-side Vercel secret only)
- `TRADINGVIEW_WEBHOOK_SECRET`

Email delivery additionally needs `RESEND_API_KEY`, `SIGNAL_EMAIL`, and `SIGNAL_FROM_EMAIL`.

## TradingView webhook

Send an alert to `https://YOUR-DOMAIN/api/analyze` as JSON. Include the same private value stored in `TRADINGVIEW_WEBHOOK_SECRET` and provide real indicator values from the alert or Pine script.

```json
{
  "secret": "YOUR_PRIVATE_WEBHOOK_SECRET",
  "symbol": "{{ticker}}",
  "timeframe": "{{interval}}",
  "price": "{{close}}",
  "rsi": 52,
  "ema20": 0,
  "ema50": 0,
  "structure": "Bullish",
  "notes": "Price-action and liquidity context from the alert"
}
```

The endpoint does not place trades. It stores an educational BUY, SELL, or NO TRADE reading with confidence, levels, reasoning, and a risk note.
