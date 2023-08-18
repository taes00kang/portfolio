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
      className="capitalize w-full text-lg flex items-center justify-center flex-1 py-4 sm:py-2 shadow-md shadow-gray-300 rounded-md gap-2 hover:bg-brand-blue hover:text-white transition-colors duration-200"
    >
      {name} <div className="text-2xl">{icon}</div>
    </a>
  );
};

export default LinkButton;
