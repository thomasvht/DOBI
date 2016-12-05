export interface IBike{
    LockId: string,
    Owner : string,
    User : string,
    LastLocation : string,
    CurrentStatus : string,
    UnlockCode : string
}

export interface IUser{
    firstname:string;
    name:string;
    email:string;
    password:string;
}

export  interface ILogin{
    email:string;
    password:string;
}