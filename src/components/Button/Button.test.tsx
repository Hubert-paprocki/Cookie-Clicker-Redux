import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders button with children", () => {
    render(<Button>Hello</Button>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("calls onClick when button is clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies primary classes when primary prop is true", () => {
    render(<Button primary>Primary Button</Button>);
    const button = screen.getByText("Primary Button");
    expect(button).toHaveClass(
      "px-5 py-2 bg-yellow-800 bg-opacity-20 rounded-bl-lg rounded-tl-lg rounded-br-lg rounded-tr-lg duration-200 border-r-4 border-l-4 border-stone-800 text-stone-300 hover:text-stone-50 md:min-w-[217px] hover:min-w-[250px] uppercase tracking-wider"
    );
  });

  it("applies menu classes when menu prop is true", () => {
    render(<Button menu>Menu Button</Button>);
    const button = screen.getByText("Menu Button");
    expect(button).toHaveClass(
      " px-3 md:px-5 py-1 md:py-2 hover:bg-yellow-800 hover:bg-opacity-20 min-[500px]:first:rounded-bl-lg min-[500px]:first:rounded-tl-lg uppercase tracking-wider min-[500px]:last:rounded-br-lg min-[500px]:last:rounded-tr-lg duration-200 max-[500px]:[&:not(:last-child)]:border-b-4 min-[500px]:[&:not(:last-child)]:border-r-4 min-[500px]:[&:not(:first-child)]:border-l-4 border-stone-800 text-stone-300 hover:text-stone-50 min-w-[143px] sm:min-w-[172px] md:min-w-[217px] md:hover:min-w-[250px] "
    );
  });

  it("applies lang classes when lang prop is true", () => {
    render(<Button lang>Lang Button</Button>);
    const button = screen.getByText("Lang Button");
    expect(button).toHaveClass(
      "z-20 bg-opacity-100 rounded-lg shadow-md shadow-neutral-900 hover:-translate-y-1 active:translate-y-0 active:duration-[50ms] duration-200 max-[500px]:absolute min-[500px]:block sm:absolute min-[500px]:top-12 right-0 min-[500px]:right-12 border-2 border-stone-800 overflow-hidden max-[500px]:w-14 max-[500px]:h-12 w-[4.5rem] h-14 flex"
    );
  });

  it("applies shopBtn classes when shopBtn prop is true", () => {
    render(<Button shopBtn>Shop Button</Button>);
    const button = screen.getByText("Shop Button");
    expect(button).toHaveClass(
      "bg-green-400 bg-opacity-20 py-1 px-4 rounded-lg sm:rounded-full flex items-center justify-center shadow-md shadow-neutral-800hover:bg-opacity-50 duration-200 hover:-translate-y-0.5 active:translate-y-0 active:duration-75"
    );
  });

  it("applies disabled attribute when disabled prop is true", () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByText("Disabled Button");
    expect(button).toBeDisabled();
  });

  it("applies flashRed class when flashRed prop is true and not disabled", () => {
    render(<Button flashRed>Flash Red Button</Button>);
    const button = screen.getByText("Flash Red Button");
    expect(button).toHaveClass("bg-red-500");
  });
});
