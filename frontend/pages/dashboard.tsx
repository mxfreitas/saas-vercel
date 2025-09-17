import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Dashboard(){
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    axios.get('/api/products').then(r=>setProducts(r.data)).catch(()=>{});
  },[]);
  return (
    <div style={{padding:20}}>
      <h2>Dashboard</h2>
      <table border={1} cellPadding={8}>
        <thead><tr><th>Produto</th><th>Preço</th><th>Vendedor</th></tr></thead>
        <tbody>
          {products.map((p:any)=>(
            <tr key={p.id}><td>{p.name}</td><td>{p.price}</td><td>{p.seller}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
