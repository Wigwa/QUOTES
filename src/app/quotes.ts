export class Quotes {
    author:String;
     dislikes:number;
     likes:number;
    showDescription:boolean;
    constructor(public id: number,       
   public name: string, public title:string, public description:string ,public quotedDate:Date) {
       this.showDescription=false;
   }

}

