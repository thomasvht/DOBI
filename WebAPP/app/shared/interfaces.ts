export interface IBike{
    Number: number,
    LockId: string,
    Owner : string,
    User : any,
    LastLocation : string,
    inMaintenance : boolean,
    UnlockCode : string
}

export interface IUser{
    Firstname:string;
    Name:string;
    Email:string;
    Password:string;
}

export  interface ILogin{
    Email:string;
    Password:string;
}

export  interface  IMaintenance{
    BikeId:string;
    Date:string;
    Mechanic:string;
    Description:string;
    Price:number;
}