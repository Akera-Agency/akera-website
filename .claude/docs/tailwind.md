# Tailwind CSS 4 Reference

## Installation (Next.js)
```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

## Config
```css
/* app/globals.css */
@import "tailwindcss";
```

## Core Concepts

### Utility Classes
```html
<div class="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
  <h2 class="text-xl font-bold text-gray-900">Title</h2>
  <button class="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
    Click
  </button>
</div>
```

### Responsive Design
```html
<!-- Mobile-first breakpoints -->
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- Full width on mobile, half on md, third on lg -->
</div>
```

Breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Dark Mode
```html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Adapts to dark mode
</div>
```

### States
```html
<button class="bg-blue-500 hover:bg-blue-600 focus:ring-2 active:bg-blue-700 disabled:opacity-50">
  Button
</button>
```

### Flexbox
```html
<div class="flex flex-col md:flex-row gap-4 items-center justify-center">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Grid
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

### Spacing
```
p-{n}  = padding
m-{n}  = margin
gap-{n} = gap

Scale: 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96
```

### Typography
```html
<h1 class="text-4xl font-bold tracking-tight">Heading</h1>
<p class="text-lg text-gray-600 leading-relaxed">Paragraph</p>
```

### Colors (Akera Brand)
```html
<!-- Orange (primary) -->
<div class="bg-orange-500 text-orange-500 border-orange-500">

<!-- Custom colors via CSS variables -->
@theme {
  --color-brand: #f97316;
  --color-brand-dark: #ea580c;
}
```

### Container
```html
<div class="container mx-auto px-4 md:px-6 lg:px-8">
  <!-- Centered container with responsive padding -->
</div>
```

### Animations
```html
<div class="transition-all duration-300 ease-in-out hover:scale-105">
  Smooth hover
</div>
```

## Docs
- Full docs: https://tailwindcss.com/docs
- Color palette: https://tailwindcss.com/docs/colors
