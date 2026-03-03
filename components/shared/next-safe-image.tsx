"use client";

import Image, { ImageProps } from "next/image";
import { useState, useEffect } from "react";
import { FallbackImage } from "@/data/assets";

interface NextImageWrapperProps extends Omit<ImageProps, "src"> {
  src?: string | null;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  unoptimized?: boolean;
}

// Ensures src is a valid URL or relative path
function normalizeSrc(src?: string | null, fallback = "/images/fallback.png") {
  if (!src) return fallback;

  const trimmed = src.trim();
  if (!trimmed) return fallback;

  try {
    // Try constructing URL (will work for absolute URLs)
    new URL(trimmed);
    return trimmed;
  } catch {
    // If fails, treat it as relative path
    return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  }
}

export function NextImage({
  src,
  fallbackSrc = FallbackImage,
  alt,
  className,
  style,
  unoptimized = false,
  ...rest
}: NextImageWrapperProps) {
  const [imgSrc, setImgSrc] = useState(normalizeSrc(src, fallbackSrc));
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const normalized = normalizeSrc(src, fallbackSrc);
    if (normalized !== imgSrc && !hasError) setImgSrc(normalized);
  }, [src, fallbackSrc, imgSrc, hasError]);

  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={alt}
      className={className}
      style={style}
      unoptimized={unoptimized}
      onError={() => {
        if (!hasError) {
          setImgSrc(normalizeSrc(fallbackSrc));
          setHasError(true);
        }
      }}
      placeholder="blur"
      blurDataURL={normalizeSrc(fallbackSrc)}
    />
  );
}
