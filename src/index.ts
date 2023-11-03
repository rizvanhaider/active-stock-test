
import {findOneStock} from './controllers/stock/stock.controller';
import {getSkuTransactions} from './controllers/transaction/transaction.controller';
import express from 'express';
import bodyParser from 'body-parser';
import * as path from 'path';


const STOCK_FILE = "../data/stock.json";
const TRANSACTION_FILE = "../data/transactions.json"
const stockFilePath = path.join(__dirname, STOCK_FILE);
const transactionFilePath = path.join(__dirname, TRANSACTION_FILE);



const app: express.Application = express();
const port: number = 3000;


app.use(bodyParser.json())


app.get('/stock-level', async (_req, _res) => {

    const sku: string = _req.query.sku as string;

    try {

        const {stock, isInStock } = await findOneStock(sku, stockFilePath);
        const skuTransactions = await getSkuTransactions(sku, isInStock, transactionFilePath);


        const totalOrdered = skuTransactions.orders - skuTransactions.refunds;
        const currentLevel = stock.stock - totalOrdered;

        _res.send({ sku: stock.sku, qty: currentLevel });

    } catch (error) {
        console.log("E: ", error)
        _res.status(400).send(error);
    }


});




export async function sayHello() {
    console.log("it works actually");

    // return stocks;
}

app.listen(port, () => {
    console.log(`Server running on 
         http://localhost:${port}/`);
});