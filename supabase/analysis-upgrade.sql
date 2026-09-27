create table if not exists public.signals(
  id uuid primary key default gen_random_uuid(),
  symbol text not null,
  timeframe text not null,
  direction text not null check(direction in('BUY','SELL','NO TRADE')),
  confidence numeric not null check(confidence between 0 and 100),
  entry_low numeric,
  entry_high numeric,
  stop_loss numeric,
  take_profit_1 numeric,
  take_profit_2 numeric,
  reasoning text not null,
  risk_note text not null,
  snapshot jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
alter table public.signals enable row level security;
drop policy if exists "public read signals" on public.signals;
create policy "public read signals" on public.signals for select using(true);
drop policy if exists "admin insert signals" on public.signals;
create policy "admin insert signals" on public.signals for insert to authenticated with check((auth.jwt()->>'email')='marcneizha@gmail.com');
create index if not exists idx_signals_created_at on public.signals(created_at desc);
