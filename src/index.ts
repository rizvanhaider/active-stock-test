
import * as stockController from './controllers/stock/stock.controller';
import * as transactionController from './controllers/transaction/transaction.controller';
import express from 'express';
import bodyParser from 'body-parser';
import * as path from 'path';

const STOCK_FILE = "../data/stock.json";
const TRANSACTION_FILE = "../data/transactions.json"
const stockFilePath = path.join(__dirname, STOCK_FILE);    
const transactionFilePath = path.join(__dirname, TRANSACTION_FILE);



const app: express.Application = express();
const port: number = 3300;
 

app.use(bodyParser.json())


app.get('/transaction', async (_req, _res) => {

    const sku:string = _req.query.sku as string ;
    const t = await transactionController.getTransactions(sku, transactionFilePath);
    
    _res.send(t);

})
app.get('/stock-level', async (_req, _res) => {

    const sku:string = _req.query.sku as string ;



    const stock = await stockController.findOneStock(sku, stockFilePath);
    const skuTransactions = await transactionController.getSkuTransactions(sku, transactionFilePath);
    // const transaction ={orders : 44, refunds : 3};

    const totalOrdered = skuTransactions.orders - skuTransactions.refunds;
    const currentLevel = stock.stock - totalOrdered;

    console.log("stock: ",  stock);
    console.log("transaction:", skuTransactions);
    console.log("current-level:", currentLevel);

    _res.send({ sku: stock.sku, qty: currentLevel});
});




export async function sayHello() {
    console.log("it works actually");

    // return stocks;
}

app.listen(port, () => {
    console.log(`Server running on 
         http://localhost:${port}/`);
});