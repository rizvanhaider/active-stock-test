import { describe, expect, test } from '@jest/globals';
import * as helper from "./helpers";
import { Transaction } from '../interfaces/interfaces';
import { CONNREFUSED } from 'dns';



describe('getTransactions()', () => {
    const transactions: Transaction[] = [{
        sku: "sku/to/consider",
        type: "order",
        qty: 23
    }, {
        sku: "sku/to/consider",
        type: "refund",
        qty: 4
    },
    {
        sku: "sku/not/to/consider",
        type: "refund",
        qty: 4
    }];
    const sku = "sku/to/consider";

    test('Aggregate transactions of one sku', async () => {
        const aggregate = helper.aggregateTransactions(transactions, sku);
        expect(aggregate).toHaveProperty("orders");
        expect(aggregate).toHaveProperty("refunds");



    });

    //   test('test stock level function', async () => {
    //     const sku= "sku/not/to/consider";

    //     const stockLevel = await helper.getSkuTransactions(sku);
    //     console.log("##: >", stockLevel);
    //     expect(stockLevel).toHaveProperty("orders");
    //     expect(stockLevel).toHaveProperty("refunds");


    //   });




});