export class Quotes {
    showDescription:boolean;
    constructor(public id: number,
   public name: string, public title:string) {
       this.showDescription=false;
   }

}
