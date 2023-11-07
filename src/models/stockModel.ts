export interface Stock {
    sku: string;
    stock: number;
  }
  
  export class StockModel implements Stock {
    sku: string;
    stock: number;
  
    constructor(data: Stock) {
      this.sku = data.sku;
      this.stock = data.stock;
    }
  }
  