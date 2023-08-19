interface Props {
  link: string;
  name: string;
  icon: JSX.Element;
}

export const LinkButton: React.FC<Props> = ({ link, name, icon }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex w-full flex-1 items-center justify-center gap-2 rounded-md py-4 text-lg capitalize shadow-md shadow-gray-300 transition-colors duration-200 hover:bg-brand-blue hover:text-white sm:py-2"
    >
      {name} <div className="text-2xl">{icon}</div>
    </a>
  );
};

export default LinkButton;
