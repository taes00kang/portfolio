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
    <div className="fixed z-10 w-full flex items-center justify-between px-8 sm:px-12 py-4 sm:py-6 shadow-md shadow-grey-400 bg-white">
      <div className="font-bold text-lg md:text-xl">Taesoo.Kang</div>
      <ul
        className={`max-md:absolute max-md:z-20 top-0 -left-full max-md:w-full max-md:h-screen max-md:bg-white flex max-md:flex-col gap-6 max-md:gap-12 items-center max-md:justify-center font-semibold text-lg max-md:transition-transform ease-in duration-300 ${
          menuOpen && 'max-md:translate-x-full'
        }`}
      >
        {menu.map((m) => (
          <li key={m}>
            <button
              className="w-full hover:text-brand-blue transition-colors duration-200 ease-in capitalize max-md:text-xl"
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
          className="absolute md:hidden top-6 right-12 max-sm:top-4 max-sm:right-6 text-3xl hover:text-brand-blue"
        >
          <FaXmark />{' '}
        </button>
      </ul>
      {/* Mobile menu open button */}
      <button
        onClick={() => setMenuOpen(true)}
        className="block md:hidden text-2xl"
      >
        <FaBarsStaggered />
      </button>
    </div>
  );
};

export default Navbar;
