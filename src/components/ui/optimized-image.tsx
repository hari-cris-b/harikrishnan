import Image, { ImageProps } from 'next/image';
import React from 'react';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  lowQualitySrc?: string;
  isAboveTheFold?: boolean;
}

const OptimizedImage = ({ 
  src, 
  lowQualitySrc,
  isAboveTheFold = false,
  alt,
  width,
  height,
  className,
  style,
  ...props 
}: OptimizedImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      loading={isAboveTheFold ? "eager" : "lazy"}
      priority={isAboveTheFold}
      quality={isAboveTheFold ? 90 : 75}
      placeholder={lowQualitySrc ? "blur" : "empty"}
      blurDataURL={lowQualitySrc}
      sizes={`(max-width: 768px) ${Math.min(width as number, 768)}px, ${width}px`}
      {...props}
    />
  );
};

export { OptimizedImage };