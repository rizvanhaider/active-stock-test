import { getCurrentStock } from '../services/stockService';

describe('getStockLevel', () => {
test('get current stock for existing SKU', async () => {
  const sku = 'LTV719449/39/39'; // hardcoded an 
  // You would use mocks to simulate file reading here
  const stock = await getCurrentStock(sku);
  expect(stock.sku).toBe(sku);
  
  // Check that the stock (quantity) property is as any number
  expect(typeof stock.stock).toBe("number"); 
});

test('test for non existing sku in stock and transaction', async () => {
    const sku = 'NOT/FOUND/SKU';
    // You would use mocks to simulate file reading here
    expect.objectContaining({
        statusCode: 404,
        message: `SKU ${sku} does not exist.`
      })
  });
})