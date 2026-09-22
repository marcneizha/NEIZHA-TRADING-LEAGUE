export type Contestant={id:string;name:string;broker:string;startingBalance:number;currentBalance:number;status:"Active"|"Eliminated"|"Completed";history:{date:string;balance:number}[]};
export type Challenge={name:string;startDate:string;endDate:string;startingBalance:number};
export type ContentItem={id:string;type:"Lesson"|"Result"|"Activity";title:string;description:string;date:string;fileUrl?:string};
