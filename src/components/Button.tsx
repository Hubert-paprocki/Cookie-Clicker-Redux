import React from "react";
interface ButtonProps {
  readonly children?: React.ReactNode;
  readonly onClick?: () => void;
  readonly type?: "button" | "submit" | "reset" | undefined;
  readonly primary?: boolean;
  readonly menu?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  onClick,
  primary,
  menu,
}) => {
  let classes;
  if (primary) {
    classes =
      "px-5 py-2 bg-yellow-800 bg-opacity-20 rounded-bl-lg rounded-tl-lg rounded-br-lg rounded-tr-lg duration-200 border-r-4 border-l-4 border-stone-800 text-stone-300 hover:text-stone-50 md:min-w-[217px] hover:min-w-[250px] uppercase tracking-wider";
  } else if (menu) {
    classes =
      "px-5 py-2 hover:bg-yellow-800 hover:bg-opacity-20 first:rounded-bl-lg first:rounded-tl-lg last:rounded-br-lg last:rounded-tr-lg duration-200 [&:not(:last-child)]:border-r-4 [&:not(:first-child)]:border-l-4 border-stone-800 text-stone-300 hover:text-stone-50 md:min-w-[217px] hover:min-w-[250px] uppercase tracking-wider";
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
