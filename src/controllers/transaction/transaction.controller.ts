import * as fs from 'fs';

import { aggregateTransactions } from '../../services/helpers';
import { Transaction } from '../../interfaces/interfaces';


export async function getTransactions(_sku: string, _path: string): Promise<Transaction[]>{

    return new Promise((resolve, reject) => {
        fs.readFile(_path, 'utf-8', (err, jsonData) => {
            if (err) {
                reject(err);
                return;
            }
            try {

                const parsedTransactions:Transaction[]  = JSON.parse(jsonData);
                const transactions = parsedTransactions.filter((t)=>(t.sku === _sku));
                // console.log("Transactions: ", transactions);
                resolve(transactions);
            } catch (error) {
                reject(error);
            }
        });
    });


}

export async function getSkuTransactions(_sku: string, _path: string): Promise<{ orders: number; refunds: number }>  {
    return new Promise((resolve, reject) => {
        fs.readFile(_path, 'utf-8', (err, jsonData) => {
            if (err) {
                reject(err);
                return;
            }
            try {

                const transactions: Transaction[] = JSON.parse(jsonData);

                const aggregatedTransactions = aggregateTransactions(transactions, _sku);               
     
                resolve(aggregatedTransactions);

            } catch (error) {
                reject(error);
            }
        });
    });

}
