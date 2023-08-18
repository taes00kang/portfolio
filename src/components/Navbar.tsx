import { FaBarsStaggered } from 'react-icons/fa6';

export const Navbar: React.FC = () => {
  const menu = ['home', 'about', 'projects', 'contact'];

  const scrollToSection = (id: string) => {
    const violation = document.getElementById(id);
    window.scrollTo({
      top: violation?.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed z-10 w-full flex items-center justify-between px-8 sm:px-12 py-4 sm:py-6 shadow-md shadow-grey-400 bg-white">
      <div className="font-bold text-lg md:text-xl">Taesoo.Kang</div>
      <ul className="max-md:absolute top-0 left-0 max-md:w-full max-md:h-screen max-md:bg-white flex max-md:flex-col gap-6 max-md:gap-12 items-center max-md:justify-center font-semibold text-lg ">
        {menu.map((m) => (
          <li key={m}>
            <button
              className="w-full hover:text-brand-blue transition-colors duration-200 ease-in capitalize"
              onClick={() => scrollToSection(`${m}`)}
            >
              {m}
            </button>
          </li>
        ))}
      </ul>
      <button className="block md:hidden text-2xl">
        <FaBarsStaggered />
      </button>
    </div>
  );
};

export default Navbar;
