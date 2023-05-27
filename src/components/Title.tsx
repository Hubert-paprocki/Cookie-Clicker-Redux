function Title(): JSX.Element {
  return (
    <h1 className=" z-10 text-6xl md:text-7xl pb-5 text-white relative hover:animate-pulse2 duration-700 max-[500px]:hidden">
      Cookie Clicker
      <span className="absolute inset-0 translate-x-[0.2rem] translate-y-[0.2rem] md:translate-x-1 md:translate-y-1 text-yellow-600 cursor-default">
        Cookie Clicker
      </span>
    </h1>
  );
}

export default Title;
