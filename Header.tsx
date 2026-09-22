import Link from "next/link";
import {ShieldCheck} from "lucide-react";
export function Header(){return <header className="header"><Link href="/" className="brand"><span className="mark">NT</span><span><strong>N.T. LEAGUE</strong><small>NEIZHA TRADING LEAGUE</small></span></Link><nav><Link href="/">Rankings</Link><Link href="/updates">League Hub</Link><Link className="admin-link" href="/admin"><ShieldCheck size={16}/> Admin</Link></nav></header>}
