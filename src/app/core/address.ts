export class Address {
    constructor(
        public id: number | string = '',
        public name: string = '',
        public address1: string = '',
        public address2: string = '',
        public city: string = '',
        public zip: string = '',
        public icon: string = '',
        public lastUsed: string = '',
        public latitude: string = '',
        public longitude: string = ''
   ) { }

   toString(): string {
       let result = `${this.address1} ${this.address2} ${this.city}`
       return result;
   }
}