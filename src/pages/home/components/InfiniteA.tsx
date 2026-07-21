interface InfiniteAProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'divider' | 'watermark';
  className?: string;
}

export default function InfiniteA({ size = 'md', variant = 'default', className = '' }: InfiniteAProps) {
  const dimensions: Record<string, { width: number; height: number; className: string }> = {
    sm: { width: 40, height: 40, className: 'w-10 h-10' },
    md: { width: 80, height: 80, className: 'w-20 h-20' },
    lg: { width: 140, height: 140, className: 'w-[140px] h-[140px]' },
    xl: { width: 220, height: 220, className: 'w-[220px] h-[220px]' },
  };

  const dim = dimensions[size];

  if (variant === 'divider') {
    return (
      <div className={`flex items-center justify-center py-4 ${className}`}>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-200/60 to-transparent"></div>
        <div className="w-10 h-10 flex items-center justify-center mx-4 relative">
          <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 30,175 L 100,25 L 170,175 L 128,95 L 72,95 L 30,175"
              stroke="url(#dividerGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="600"
              strokeDashoffset="600"
              className="animate-draw-a"
            />
            <defs>
              <linearGradient id="dividerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-200/60 to-transparent"></div>
      </div>
    );
  }

  if (variant === 'watermark') {
    return (
      <div className={`absolute inset-0 flex items-center justify-center pointer-events-none select-none ${className}`}>
        <svg viewBox="0 0 200 200" className="w-full h-full opacity-[0.03]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 25,180 L 100,20 L 175,180 L 130,100 L 70,100 L 25,180"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center ${dim.className} ${className}`}>
      <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 25,180 L 100,20 L 175,180 L 130,100 L 70,100 L 25,180"
          stroke="url(#infiniteGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1200"
          strokeDashoffset="1200"
          className="animate-draw-a"
        />
        <path
          d="M 25,180 L 100,20 L 175,180 L 130,100 L 70,100 L 25,180"
          stroke="url(#flowGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="80 1120"
          className="animate-flow-line"
          opacity="0.7"
        />
        <circle cx="100" cy="20" r="3" fill="#3b82f6" className="animate-pulse-node" />
        <circle cx="70" cy="100" r="3" fill="#3b82f6" className="animate-pulse-node-delayed" />
        <circle cx="130" cy="100" r="3" fill="#3b82f6" className="animate-pulse-node-slow" />
        <defs>
          <linearGradient id="infiniteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="40%" stopColor="#3b82f6" />
            <stop offset="70%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <linearGradient id="flowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
            <stop offset="25%" stopColor="#3b82f6" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#2563eb" stopOpacity="1" />
            <stop offset="75%" stopColor="#3b82f6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}