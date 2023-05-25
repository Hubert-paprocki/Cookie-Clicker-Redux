import React from "react";
interface ButtonProps {
  readonly children?: React.ReactNode;
  readonly onClick?: () => void;
  readonly type?: "button" | "submit" | "reset" | undefined;
  readonly primary?: boolean;
  readonly menu?: boolean;
  readonly lang?: boolean;
}

function Button({
  children,
  type,
  onClick,
  primary,
  menu,
  lang,
}: ButtonProps): JSX.Element {
  let classes;
  if (primary) {
    classes =
      "px-5 py-2 bg-yellow-800 bg-opacity-20 rounded-bl-lg rounded-tl-lg rounded-br-lg rounded-tr-lg duration-200 border-r-4 border-l-4 border-stone-800 text-stone-300 hover:text-stone-50 md:min-w-[217px] hover:min-w-[250px] uppercase tracking-wider";
  } else if (menu) {
    classes =
      " px-3 md:px-5 py-1 md:py-2 hover:bg-yellow-800 hover:bg-opacity-20 min-[500px]:first:rounded-bl-lg min-[500px]:first:rounded-tl-lg uppercase tracking-wider min-[500px]:last:rounded-br-lg min-[500px]:last:rounded-tr-lg duration-200 max-[500px]:[&:not(:last-child)]:border-b-4 min-[500px]:[&:not(:last-child)]:border-r-4 min-[500px]:[&:not(:first-child)]:border-l-4 border-stone-800 text-stone-300 hover:text-stone-50 min-w-[143px] sm:min-w-[172px] md:min-w-[217px] md:hover:min-w-[250px] ";
  }
  if (lang) {
    classes =
      "z-20 bg-opacity-100 rounded-lg shadow-md shadow-neutral-900 hover:-translate-y-1 active:translate-y-0 active:duration-[50ms] duration-200 max-[500px]:absolute min-[500px]:block sm:absolute min-[500px]:top-12 right-0 min-[500px]:right-12 border-2 border-stone-800 overflow-hidden max-[500px]:w-14 max-[500px]:h-12 w-[4.5rem] h-14 flex";
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {children}
    </button>
  );
}

export default Button;
