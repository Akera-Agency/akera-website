# Next.js 14+ Reference

## App Router Basics

### File-based Routing
```
app/
├── page.tsx          # / route
├── about/page.tsx    # /about route
├── blog/
│   ├── page.tsx      # /blog route
│   └── [slug]/page.tsx  # /blog/:slug dynamic route
```

### Special Files
- `page.tsx` - UI for a route
- `layout.tsx` - Shared UI for segment and children
- `loading.tsx` - Loading UI
- `error.tsx` - Error UI
- `not-found.tsx` - 404 UI

### Server vs Client Components
```tsx
// Server Component (default)
export default async function Page() {
  const data = await fetch('...')
  return <div>{data}</div>
}

// Client Component
'use client'
import { useState } from 'react'
export default function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>
}
```

### Metadata
```tsx
// Static
export const metadata = {
  title: 'Page Title',
  description: 'Page description',
}

// Dynamic
export async function generateMetadata({ params }) {
  return { title: `Post: ${params.slug}` }
}
```

### Data Fetching
```tsx
// Server Component (recommended)
async function getData() {
  const res = await fetch('https://api.example.com/data', {
    next: { revalidate: 3600 } // ISR: revalidate every hour
  })
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <main>{/* use data */}</main>
}
```

### Image Optimization
```tsx
import Image from 'next/image'

<Image
  src="/hero.jpg"
  alt="Hero image"
  width={1200}
  height={600}
  priority // for above-the-fold images
/>
```

### Font Optimization
```tsx
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  return <body className={inter.className}>{children}</body>
}
```

## Docs
- Full docs: https://nextjs.org/docs
- App Router: https://nextjs.org/docs/app
- API Reference: https://nextjs.org/docs/app/api-reference
