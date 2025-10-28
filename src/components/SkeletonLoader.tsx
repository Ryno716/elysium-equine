"use client";

interface SkeletonLoaderProps {
  className?: string;
  variant?: "rectangular" | "circular" | "text";
  width?: string | number;
  height?: string | number;
  count?: number;
}

export default function SkeletonLoader({
  className = "",
  variant = "rectangular",
  width = "100%",
  height = "100%",
  count = 1,
}: SkeletonLoaderProps) {
  const baseClasses = "animate-pulse bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-[length:200%_100%]";
  
  const variantClasses = {
    rectangular: "rounded-lg",
    circular: "rounded-full",
    text: "rounded h-4 mb-2",
  };

  const skeletonStyle = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  };

  const skeletons = Array.from({ length: count }, (_, index) => (
    <div
      key={index}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={skeletonStyle}
    />
  ));

  return count > 1 ? <div className="space-y-2">{skeletons}</div> : skeletons[0];
}

// Image Skeleton Component
export function ImageSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <SkeletonLoader className="w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" 
           style={{ animation: "shimmer 2s infinite" }} />
    </div>
  );
}

// Card Skeleton Component
export function CardSkeleton() {
  return (
    <div className="bg-gray-800 rounded-xl p-6 space-y-4">
      <SkeletonLoader variant="rectangular" height={200} />
      <SkeletonLoader variant="text" count={3} />
      <div className="flex justify-between">
        <SkeletonLoader width={100} height={40} />
        <SkeletonLoader width={100} height={40} />
      </div>
    </div>
  );
}
