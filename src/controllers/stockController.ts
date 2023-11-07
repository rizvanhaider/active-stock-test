import { Request, Response } from 'express';
import { getCurrentStock } from '../services/stockService';

export async function getStockLevel(req: Request, res: Response): Promise<void> {
  try {
    const sku = req.params.sku;
    const stockLevel = await getCurrentStock(sku);
    res.json(stockLevel);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(404).send({message: error.message});
    } else {
      res.status(500).send({message: 'An unexpected error occurred'});
    }
  }
}
