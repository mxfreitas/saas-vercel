import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  if(req.method === 'POST'){
    const pythonUrl = process.env.NEXT_PUBLIC_PYTHON_API_URL;
    if(!pythonUrl) return res.status(500).json({error:'PYTHON API URL not configured'});
    const resp = await fetch(pythonUrl + '/curva-abc', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(req.body) });
    const data = await resp.json();
    return res.status(200).json(data);
  }
  res.status(405).end();
}
