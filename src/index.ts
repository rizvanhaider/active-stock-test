import express from 'express';
import { getStockLevel } from './controllers/stockController';

const app = express();
const port = 3000;

app.get('/stock/:sku(*)', getStockLevel);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
