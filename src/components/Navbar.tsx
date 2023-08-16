export const Navbar: React.FC = () => {
  const menu = ['home', 'about', 'projects', 'contact'];
  return (
    <div className="fixed z-10 w-full flex items-center justify-between px-12 py-6 shadow-md shadow-grey-400 bg-white">
      <div className="font-bold text-xl">Taesoo.Kang</div>
      <ul className="flex gap-6 items-center font-semibold text-lg">
        {menu.map((m) => (
          <li
            key={m}
            className="hover:text-brand-blue transition-colors duration-200 ease-in capitalize"
          >
            <a href={`#${m}`}>{m}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
