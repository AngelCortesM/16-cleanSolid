type Size = "S" | "M" | "XL";
class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = "S"
  ) {}

  isProductReady(): boolean {
    //Dry
    for (const key in this) {
      switch (typeof this[key]) {
        case "string":
          if (this[key].length <= 0) throw new Error(`${key} is empty`);
          break;
        case "number":
          if (this[key] <= 0) throw new Error(`${key} is zero`);
          break;
        default:
          throw new Error(`${typeof this[key]} is no supported`);
      }
    }
    return true;
  }
  toString() {
    //No Dry
    // // if (this.name.length <= 0) throw new Error("Name is empty");
    // // if (this.price <= 0) throw new Error("Price is zero");
    // // if (this.size.length <= 0) throw new Error("Sice is empty");
    if (!this.isProductReady()) return;
    return `Product: ${this.name} (${this.size}) - $${this.price}`;
  }
}
(() => {
  const bluePants = new Product("Blue Large Pants", 10, "XL");
  console.log(bluePants.toString());
})();
