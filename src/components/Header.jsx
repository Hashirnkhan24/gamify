import gamify from "../assets/gamify.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm bg-n-8/90 backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 py-4">
        <a
          href="#hero"
          className="flex gap-2 items-center justify-center w-[12rem] xl:mr-8"
        >
          <img src={gamify} alt="Gamify" />
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold lg:font-extrabold text-white">
            Gamify
          </h1>
        </a>
      </div>
    </header>
  );
};

export default Header;
