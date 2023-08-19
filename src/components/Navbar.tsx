import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';
import { useState } from 'react';

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menu = ['home', 'about', 'projects', 'contact'];

  const scrollToSection = (id: string) => {
    const violation = document.getElementById(id);
    window.scrollTo({
      top: violation?.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className="shadow-grey-400 fixed z-10 flex w-full items-center justify-between bg-white px-8 py-4 shadow-md sm:px-12 sm:py-6">
      <div className="text-lg font-bold md:text-xl">Taesoo.Kang</div>
      <ul
        className={`-left-full top-0 flex items-center gap-6 text-lg font-semibold duration-300 ease-in max-md:absolute max-md:z-20 max-md:h-screen max-md:w-full max-md:flex-col max-md:justify-center max-md:gap-12 max-md:bg-white max-md:transition-transform ${
          menuOpen && 'max-md:translate-x-full'
        }`}
      >
        {menu.map((m) => (
          <li key={m}>
            <button
              className="w-full capitalize transition-colors duration-200 ease-in hover:text-brand-blue max-md:text-xl"
              onClick={() => {
                scrollToSection(`${m}`);
                setMenuOpen(false);
              }}
            >
              {m}
            </button>
          </li>
        ))}
        {/* Mobile menu close button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute right-12 top-6 text-3xl hover:text-brand-blue max-sm:right-6 max-sm:top-4 md:hidden"
        >
          <FaXmark />{' '}
        </button>
      </ul>
      {/* Mobile menu open button */}
      <button
        onClick={() => setMenuOpen(true)}
        className="block text-2xl md:hidden"
      >
        <FaBarsStaggered />
      </button>
    </div>
  );
};

export default Navbar;
