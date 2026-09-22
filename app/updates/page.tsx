import {BookOpen,FileBarChart,Radio} from "lucide-react";
import {contentItems} from "@/lib/demo-data";
const icon={Lesson:BookOpen,Result:FileBarChart,Activity:Radio};
export default function Updates(){return <><section className="intro"><div><span className="eyebrow">LEAGUE HUB</span><h1>Lessons, results & activities</h1><p>Everything happening across N.T. League.</p></div></section><section className="content-grid">{contentItems.map(item=>{const Icon=icon[item.type];return <article className="content-card" key={item.id}><div className="content-icon"><Icon/></div><span className="section-kicker">{item.type.toUpperCase()}</span><h2>{item.title}</h2><p>{item.description}</p><time>{item.date}</time></article>})}</section></>}
