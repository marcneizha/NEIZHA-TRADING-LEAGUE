import type {Metadata} from "next";
import "./globals.css";
import "./redesign.css";
import {Header} from "@/components/Header";
export const metadata:Metadata={title:"N.T. LEAGUE | Neizha Trading League",description:"Official rankings, performance and updates for N.T. League."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><div className="shell"><Header/><main>{children}</main><footer><span>N.T. LEAGUE</span><span>Performance is tracked for educational competition purposes.</span></footer></div></body></html>}
