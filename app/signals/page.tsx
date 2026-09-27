import{SignalCard}from"@/components/SignalCard";import{getSignals}from"@/lib/signals";
export const dynamic="force-dynamic";
export default async function Signals(){const signals=await getSignals(100);return <><section className="signals-heading"><span className="eyebrow">SIGNAL JOURNAL</span><h1>Analysis history</h1><p>Every AI reading is saved with its market snapshot, levels and uncertainty.</p></section><div className="signals-list">{signals.length?signals.map(s=><SignalCard key={s.id} signal={s}/>):<p>No signals have been generated yet.</p>}</div></>}
