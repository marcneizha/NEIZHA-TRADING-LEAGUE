import {Challenge,Contestant,ContentItem} from "./types";
export const challenge:Challenge={name:"September Growth Challenge",startDate:"2026-09-21",endDate:"2026-09-25",startingBalance:1000};
export const contestants:Contestant[]=[
 {id:"amina-k",name:"Amina K.",broker:"Exness",startingBalance:1000,currentBalance:1468,status:"Active",history:[{date:"Mon",balance:1000},{date:"Tue",balance:1085},{date:"Wed",balance:1190},{date:"Thu",balance:1325},{date:"Fri",balance:1468}]},
 {id:"trevor-m",name:"Trevor M.",broker:"Headway",startingBalance:1000,currentBalance:1312,status:"Active",history:[{date:"Mon",balance:1000},{date:"Tue",balance:1120},{date:"Wed",balance:1070},{date:"Thu",balance:1235},{date:"Fri",balance:1312}]},
 {id:"jay-pips",name:"Jay Pips",broker:"Deriv",startingBalance:1000,currentBalance:1184,status:"Active",history:[{date:"Mon",balance:1000},{date:"Tue",balance:965},{date:"Wed",balance:1060},{date:"Thu",balance:1130},{date:"Fri",balance:1184}]},
 {id:"nakato-fx",name:"Nakato FX",broker:"Exness",startingBalance:1000,currentBalance:924,status:"Active",history:[{date:"Mon",balance:1000},{date:"Tue",balance:1040},{date:"Wed",balance:970},{date:"Thu",balance:1015},{date:"Fri",balance:924}]}
];
export const contentItems:ContentItem[]=[{id:"1",type:"Lesson",title:"Reading market structure",description:"A practical guide to structure, confirmation and risk.",date:"2026-09-22"},{id:"2",type:"Result",title:"Monday results",description:"Opening-day standings and performance recap.",date:"2026-09-21"}];
export const profit=(c:Contestant)=>c.currentBalance-c.startingBalance;
export const growth=(c:Contestant)=>profit(c)/c.startingBalance*100;
export const ranked=[...contestants].sort((a,b)=>growth(b)-growth(a));
