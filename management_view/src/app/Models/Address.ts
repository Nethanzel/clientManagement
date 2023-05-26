export class Address {
    constructor(
        public uid:Number, 
        public street: string,
        public city: string,
        public country?: string
    ) {  }
}