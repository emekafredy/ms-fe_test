import { FC } from "react";
import Image from "next/image";
import { ButtonType } from "@/types/button.type";

export const Button: FC<ButtonType> = ({
  content,
  size,
  btnClass,
  leftIcon,
  rightIcon,
  imgAlt = "",
  handleClick,
}) => {
  return (
    <button
      className={`btn-${btnClass} btn-${size} transition-all duration-500`}
      onClick={handleClick}
    >
      {leftIcon && <Image src={leftIcon} alt={imgAlt} />}
      {content}
      {rightIcon && <Image src={rightIcon} alt={imgAlt} />}
    </button>
  );
};
