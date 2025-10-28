"use client";
import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { motion } from "framer-motion";

interface EnhancedImageProps extends Omit<ImageProps, 'onLoad'> {
  zoomOnHover?: boolean;
  blurDataURL?: string;
}

export default function EnhancedImage({
  zoomOnHover = false,
  className = "",
  ...props
}: EnhancedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={false}
      animate={
        zoomOnHover
          ? {
              scale: 1,
            }
          : {}
      }
      whileHover={
        zoomOnHover
          ? {
              scale: 1.05,
            }
          : {}
      }
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="absolute inset-0"
    >
      <Image
        {...props}
        alt={props.alt || ""}
        className={`${className} transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
        placeholder={props.blurDataURL ? "blur" : "empty"}
      />
      
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-pulse" />
      )}
    </motion.div>
  );
}
