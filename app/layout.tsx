import type {Metadata} from "next";
import "./globals.css";
import "./redesign.css";
import "./admin-auth.css";
import "./analysis.css";
import {Header} from "@/components/Header";
export const metadata:Metadata={title:"N.T. Analytics | Market Intelligence",description:"TradingView charts, structured market analysis and an educational signal journal."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><div className="shell"><Header/><main>{children}</main><footer><span>N.T. ANALYTICS</span><span>Educational analysis only · No automatic trade execution</span></footer></div></body></html>}
