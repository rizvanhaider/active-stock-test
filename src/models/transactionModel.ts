export interface Transaction {
    sku: string;
    type: 'order' | 'refund';
    qty: number;
  }
  
  export class TransactionModel implements Transaction {
    sku: string;
    type: 'order' | 'refund';
    qty: number;
  
    constructor(data: Transaction) {
      this.sku = data.sku;
      this.type = data.type;
      this.qty = data.qty;
    }
  }
  