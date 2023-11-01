import * as stockController from '../controllers/stock/stock.controller';
import * as transactionController from '../controllers/transaction/transaction.controller';
import { Transaction } from '../interfaces/interfaces.js';


export function aggregateTransactions(transactions: Transaction[], sku: string) {
  const result: { orders: number; refunds: number } = {
    orders: 0,
    refunds: 0,
  };

  for (const transaction of transactions) {

    if(transaction.sku === sku){

      if (transaction.type === "order") {

        result.orders += transaction.qty;

      } else if (transaction.type === "refund") {

        result.refunds += transaction.qty;
      }

    }
    
  }

  return result;
}

export async function getSkuTransactions(sku: string): Promise<{ orders: number; refunds: number }>  {
  return new Promise(async (resolve, reject) => {
   
          try {
            
              const transactions:Transaction[] = await transactionController.getTransactions(sku);

              const aggregatedTransactions = aggregateTransactions(transactions, sku);
             
              
              resolve(aggregatedTransactions);
          } catch (error) {
              reject(error);
          }
    
  });

}


