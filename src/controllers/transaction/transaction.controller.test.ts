import {describe, expect, test} from '@jest/globals';
import { getTransactions } from "./transaction.controller";
import * as path from 'path';


describe('getTransactions()', () => {
  const sku = "PRO481716/07/95";

  const transactionFilePath = path.join(__dirname, '../../../data/transactions.json');

  test('should check if trnasaction has sku property', async () => {
    const transaction = await getTransactions(sku, transactionFilePath);
    expect(transaction[0]).toHaveProperty("sku");
    expect(transaction[0]).toHaveProperty("type");
    expect(transaction[0]).toHaveProperty("qty");
  });

});