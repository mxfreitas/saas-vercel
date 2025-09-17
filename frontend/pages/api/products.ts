import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  if(req.method === 'GET'){
    const products = await prisma.product.findMany();
    return res.status(200).json(products);
  }
  if(req.method === 'POST'){
    const { name, price, seller } = req.body;
    const p = await prisma.product.create({ data: { name, price: parseFloat(price), seller } });
    return res.status(201).json(p);
  }
  res.status(405).end();
}
