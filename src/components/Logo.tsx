import Link from "next/link";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <Link 
      href="/" 
      className={`flex items-center gap-3 ${className}`}
      aria-label="Akera Agency - Go to homepage"
    >
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 44c12.15 0 22-9.85 22-22S34.15 0 22 0 0 9.85 0 22s9.85 22 22 22Zm3.877-33.86c.143 3.973 1.244 6.842 3.274 8.508 2.25 1.85 5.088 1.803 6.319 1.782h.003a6.32 6.32 0 0 1 .479.002v4.77a13.87 13.87 0 0 1-.832.004 32.652 32.652 0 0 0-.383-.004c-2.172 0-5.629-.45-8.564-2.824-1.971-1.598-3.373-3.778-4.197-6.502-.824 2.724-2.226 4.903-4.199 6.502-2.933 2.38-6.39 2.824-8.564 2.824-.107 0-.24.002-.381.004-.306.004-.647.008-.832-.004v-4.77c.105-.008.268-.005.479-.002h.003c1.231.02 4.067.068 6.32-1.782 2.03-1.666 3.129-4.535 3.266-8.504V10h7.81v.14ZM11.03 30.603c4.02-3.793 8.344-5.742 12.443-5.314 5.611.585 8.995 5.05 9.404 5.616l.044.058L29.24 34c-.215-.274-2.908-3.634-6.3-3.971-2.628-.253-5.449 1.012-8.386 3.753l-3.525-3.18Z"
          fill="#fff"
        />
      </svg>
      {showText && (
        <span className="text-2xl font-bold tracking-tight text-primary">
          Akera Agency
        </span>
      )}
    </Link>
  );
}
