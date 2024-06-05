import Image, { ImageProps } from "next/image";

interface PropertyImageProps extends ImageProps {
  alt: string;
}

const PropertyImage: React.FC<PropertyImageProps> = ({
  src,
  alt,
  ...props
}) => {
  return <Image src={src} alt={alt} {...props} />;
};

export default PropertyImage;
