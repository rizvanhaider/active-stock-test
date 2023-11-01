import {describe, expect, test} from '@jest/globals';
import { findOneStock } from "./stock.controller";
import * as path from 'path';

describe('Find stock with valid sku', () => {
  const sku = "PRO481716/07/95";
  const stockFilePath = path.join(__dirname, '../../../data/stock.json');
  test('should check if stock has sku property', async () => {
    
    const stock = await findOneStock(sku,stockFilePath);
    expect(stock).toHaveProperty("sku");
    expect(stock).toHaveProperty("stock");
  });

});
describe('Stock Invalid SKU', () => {
  const sku = "NonExistingSKU";
  const stockFilePath = path.join(__dirname, '../../../data/stock.json');
  test('should return 0 stock for non existing sku', async () => {
    const stock = await findOneStock(sku, stockFilePath);
    expect(stock.stock).toBe(0);
  });

});