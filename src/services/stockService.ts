import { readJSONFile } from '../utils/fileReader';
import { StockModel, Stock } from '../models/stockModel';
import { Transaction } from '../models/transactionModel';


const STOCK_JSON_PATH = './data/stock.json';
const TRANSACTION_JSON_PATH = './data/transactions.json';

export async function getCurrentStock(sku: string): Promise<Stock> {

  //loads JSON data from files.
  const stockData: Stock[] = await readJSONFile<Stock[]>(STOCK_JSON_PATH);
  const transactionData: Transaction[] = await readJSONFile<Transaction[]>(TRANSACTION_JSON_PATH);
  
  //If stock not found in stock.json the default stock is zero
  let currentStock = stockData.find(s => s.sku === sku)?.stock || 0;
  const transactions = transactionData.filter(t => t.sku === sku);

  //To throw an error where the SKU does not exist in the `transactions.json` and `stock.json`
  if (!stockData.some(s => s.sku === sku) && transactions.length === 0) {
    throw new Error(`SKU ${sku} does not exist`);
  }

  //Calculating the actual stock that is out by doing math with orders and refunds.
  transactions.forEach(transaction => {
    if (transaction.type === 'order') {
      currentStock -= transaction.qty;
    } else {
      currentStock += transaction.qty;
    }
  });

  return new StockModel({ sku, stock: currentStock });
}
