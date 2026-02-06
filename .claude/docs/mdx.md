# MDX + Contentlayer Reference

## Installation
```bash
npm install contentlayer next-contentlayer
```

## Configuration

### contentlayer.config.ts
```ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    image: { type: 'string' },
    tags: { type: 'list', of: { type: 'string' } },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath.replace('posts/', ''),
    },
    readingTime: {
      type: 'string',
      resolve: (post) => {
        const words = post.body.raw.split(/\s+/).length
        return `${Math.ceil(words / 200)} min read`
      },
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
})
```

### next.config.js
```js
const { withContentlayer } = require('next-contentlayer')

module.exports = withContentlayer({
  // Next.js config
})
```

## Writing Content

### content/posts/my-post.mdx
```mdx
---
title: My First Post
description: A great post about something
date: 2026-02-01
image: /images/post-1.jpg
tags:
  - conversion
  - design
---

# Introduction

This is my post content with **bold** and *italic* text.

<Callout type="info">
  This is a custom component!
</Callout>

## Code Example

```tsx
function Hello() {
  return <div>Hello World</div>
}
```
```

## Using in Pages

### app/blog/page.tsx
```tsx
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

export default function BlogPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <div>
      {posts.map((post) => (
        <article key={post.slug}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <time>{post.date}</time>
          <span>{post.readingTime}</span>
        </article>
      ))}
    </div>
  )
}
```

### app/blog/[slug]/page.tsx
```tsx
import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }))
}

export default function PostPage({ params }) {
  const post = allPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const MDXContent = useMDXComponent(post.body.code)

  return (
    <article>
      <h1>{post.title}</h1>
      <MDXContent components={mdxComponents} />
    </article>
  )
}
```

## Custom Components
```tsx
// components/mdx/index.tsx
import { Callout } from './callout'
import { CodeBlock } from './code-block'

export const mdxComponents = {
  Callout,
  pre: CodeBlock,
  // Override default elements
  h2: (props) => <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />,
}
```

## Docs
- Contentlayer: https://contentlayer.dev
- MDX: https://mdxjs.com
