import Link from "next/link";
import {ShieldCheck} from "lucide-react";
export function Header(){return <header className="header"><Link href="/" className="brand"><span className="mark">NT</span><span><strong>N.T. ANALYTICS</strong><small>MARKET INTELLIGENCE</small></span></Link><nav><Link href="/">Analysis</Link><Link href="/signals">Signals</Link><Link className="admin-link" href="/admin"><ShieldCheck size={16}/> Analysis lab</Link></nav></header>}
