import Link from 'next/link'

export default function Home(){
  return (
    <main style={{padding:24}}>
      <h1>GeekPulse - Demo (Next.js + Prisma + Supabase + Python)</h1>
      <p>This repository is prepared to deploy on Vercel. Use the /dashboard page to explore.</p>
      <p><Link href='/dashboard'>Open Dashboard</Link></p>
    </main>
  )
}
