import React from "react";
interface ButtonProps {
  readonly children?: React.ReactNode;
  readonly onClick?: () => void;
  readonly type?: "button" | "submit" | "reset" | undefined;
  readonly primary?: boolean;
  readonly menu?: boolean;
}

function Button({
  children,
  type,
  onClick,
  primary,
  menu,
}: ButtonProps): JSX.Element {
  let classes;
  if (primary) {
    classes =
      "px-5 py-2 bg-yellow-800 bg-opacity-20 rounded-bl-lg rounded-tl-lg rounded-br-lg rounded-tr-lg duration-200 border-r-4 border-l-4 border-stone-800 text-stone-300 hover:text-stone-50 md:min-w-[217px] hover:min-w-[250px] uppercase tracking-wider";
  } else if (menu) {
    classes =
      " px-3 md:px-5 py-1 md:py-2 hover:bg-yellow-800 hover:bg-opacity-20 min-[500px]:first:rounded-bl-lg min-[500px]:first:rounded-tl-lg uppercase tracking-wider min-[500px]:last:rounded-br-lg min-[500px]:last:rounded-tr-lg duration-200 max-[500px]:[&:not(:last-child)]:border-b-4 min-[500px]:[&:not(:last-child)]:border-r-4 min-[500px]:[&:not(:first-child)]:border-l-4 border-stone-800 text-stone-300 hover:text-stone-50 min-w-[143px] sm:min-w-[172px] md:min-w-[217px] md:hover:min-w-[250px] ";
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export default Button;
