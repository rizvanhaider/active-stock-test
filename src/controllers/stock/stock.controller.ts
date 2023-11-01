import * as fs from 'fs';
import * as path from 'path';
import { Stock } from '../../interfaces/interfaces';

export async function findOneStock(_sku: string, _path: string): Promise<Stock> {

  console.log("getting stocks..", _path);
  try {
    const jsonData = fs.readFileSync(_path, 'utf-8');
    const parsedData = JSON.parse(jsonData);
    let stock: Stock = {
      sku: _sku,
      stock: 0
    };

    for (let s of parsedData) {
      if (s.sku === _sku) {
        stock = s;
        break;
      }
  
    }
    return stock;
  } catch (error) {
    console.error("Error reading JSON file:", error);
    throw error;
  }

}
