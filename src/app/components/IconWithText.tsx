import Image, { StaticImageData } from "next/image";
import React from "react";

interface IconWithText {
  iconImage: string | StaticImageData;
  iconText?: string;
  iconStyles?: string;
  textStyles?: string;
  imageStyles?: string;
}

const IconWithText: React.FC<IconWithText> = ({
  iconImage,
  iconText,
  iconStyles = "flex items-center space-x-2",
  textStyles = "text-base font-medium",
  imageStyles = "w-20 h-20",
}) => {
  return (
    <div className={iconStyles}>
      <Image
        src={iconImage}
        alt="icon"
        width={24}
        height={24}
        className={imageStyles}
      />
      <h4 className={textStyles}>{iconText}</h4>
    </div>
  );
};

export default IconWithText;
