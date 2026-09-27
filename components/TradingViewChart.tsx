"use client";
import {useEffect,useRef} from "react";

export function TradingViewChart({symbol="OANDA:XAUUSD"}:{symbol?:string}){
  const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{if(!ref.current)return;ref.current.innerHTML="";const box=document.createElement("div");box.className="tradingview-widget-container__widget";const script=document.createElement("script");script.src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";script.async=true;script.innerHTML=JSON.stringify({autosize:true,symbol,interval:"15",timezone:"Africa/Kampala",theme:"dark",style:"1",locale:"en",allow_symbol_change:true,calendar:false,support_host:"https://www.tradingview.com"});ref.current.append(box,script)},[symbol]);
  return <div ref={ref} className="tradingview-widget-container tv-chart"/>;
}
