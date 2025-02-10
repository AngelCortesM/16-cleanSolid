export abstract class Car {
    constructor(protected readonly numberOfSeats: number) {}
  
    abstract getNumberOfSeats(): number;
  }
  
  export class Tesla extends Car {
    getNumberOfSeats() {
      return this.numberOfSeats;
    }
  }
  
  export class Audi extends Car {
    getNumberOfSeats() {
      return this.numberOfSeats;
    }
  }
  
  export class Toyota extends Car {
    getNumberOfSeats() {
      return this.numberOfSeats;
    }
  }
  
  export class Honda extends Car {
    getNumberOfSeats() {
      return this.numberOfSeats;
    }
  }