export type ButtonType = {
  content: string | React.ReactNode;
  size: string;
  btnClass: string;
  leftIcon?: React.ReactNode;
  rightIcon?: string;
  imgAlt?: string;
  handleClick: () => void;
  active?: boolean;
  bordered?: boolean;
  disabled?: boolean;
};
