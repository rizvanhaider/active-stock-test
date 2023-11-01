import {describe, expect, test} from '@jest/globals';
import { getTransactions } from "./transaction.controller";

function add(a:number, b:number){
  return a+b;
}


describe('getTransactions()', () => {
  const sku = "PRO481716/07/95";
 
  // test('1 + 1 should be 2', ()=> {
  //   expect(add(1,2)).toBe(3);
  // })
  test('should check if trnasaction has sku property', async () => {
    const transaction = await getTransactions(sku);
    expect(transaction[0]).toHaveProperty("sku");
    expect(transaction[0]).toHaveProperty("type");
    expect(transaction[0]).toHaveProperty("qty");
  });

});