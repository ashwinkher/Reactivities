export interface IActivity{
    id:string;
    title: string;
description: string;
category: string;
venue: string;
date:Date;
city:string;
}
// using this below partial interface, all the properties assigned into it will be optional
export interface IActivityFormValues extends Partial<IActivity>{
    time?:Date;
}

export class ActivityFormValues implements IActivityFormValues {
    id?: string  = undefined;
    title: string =  '';
    category: string = '';
    description: string = '';
    date?: Date = undefined;
    time?: Date = undefined;
    city: string =  '';
    venue: string = '';

    constructor(init?: IActivityFormValues){
        if(init && init.date)
        {
            init.time = init.date;
        }
        Object.assign(this,init);
        //this above line will auto populate the props with init values. this is the target, and init will be the source
    }
}

