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
  active,
  bordered,
  disabled,
}) => {
  return (
    <button
      className={`btn-${active ? "primary" : btnClass} btn-${size} ${
        bordered ? "btn-border" : ""
      } transition-all duration-500 ${disabled ? "btn-disabled" : ""}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {leftIcon && <Image src={leftIcon} alt={imgAlt} />}
      {content}
      {rightIcon && <Image src={rightIcon} alt={imgAlt} />}
    </button>
  );
};
