import { describe, expect, test } from '@jest/globals';
import { getTransactions, getSkuTransactions } from "./transaction.controller";
import * as path from 'path';


describe('getTransactions()', () => {
  const sku = "PRO481716/07/95";

  const transactionFilePath = path.join(__dirname, '../../../data/transactions.json');

  test('should check if trnasaction has valid object', async () => {
    const transaction = await getTransactions(sku, transactionFilePath);
    expect(transaction[0]).toHaveProperty("sku");
    expect(transaction[0]).toHaveProperty("type");
    expect(transaction[0]).toHaveProperty("qty");
  });



  test('should throw error if sku not found in transaction', async () => {
    const sku = "sku/not/to/consider";
    const isInStock = false;
    await expect(getSkuTransactions(sku, isInStock, transactionFilePath)).rejects.toThrow("SKU does not exist in the transactions.json and stock.json");

  });


});