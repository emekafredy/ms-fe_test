export type ButtonType = {
  content: string | React.ReactNode;
  size: string;
  btnClass: string;
  leftIcon?: string;
  rightIcon?: string;
  imgAlt?: string;
  handleClick: () => void;
  active?: boolean;
  bordered?: boolean;
  disabled?: boolean;
};
