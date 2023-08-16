export const Navbar: React.FC = () => {
  return (
    <div className="fixed w-full flex items-center justify-between px-12 py-6 shadow-md shadow-grey-400 bg-white">
      <div className="font-bold text-xl">Taesoo.Kang</div>
      <ul className="flex gap-6 items-center font-semibold text-lg">
        <li>
          <a href="./">Home</a>
        </li>
        <li>
          <a href="./">About</a>
        </li>
        <li>
          <a href="./">Project</a>
        </li>
        <li>
          <a href="./">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
