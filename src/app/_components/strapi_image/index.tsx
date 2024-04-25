import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

type StrapiImageProps = {
  src: string;
  alt: string;
  height: number;
  width: number;
  className?: string;
  sizes?: string;
  style?: React.CSSProperties;
  loading?: "lazy" | "eager";
}

export function StrapiImage({
  src,
  alt,
  height,
  sizes,
  style,
  width,
  className,
  loading
}: Readonly<StrapiImageProps>) {
  if (!src) return null;
  const imageUrl = getStrapiMedia(src);
  const imageFallback = `https://placehold.co/${width}x${height}`;

  return (
    <Image
      src={imageUrl ?? imageFallback}
      alt={alt}
      height={height}
      width={width}
      className={className}
      sizes={sizes}
      style={style}
      loading={loading}
    />
  );
}

export default StrapiImage;