import { ContactItemProps } from '../constants/interfaces';

export const ContactItem: React.FC<ContactItemProps> = ({
  name,
  link,
  caption,
  icon,
}) => {
  return (
    <div className="flex items-center gap-6 sm:gap-4">
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className="flex aspect-square w-20 items-center justify-center rounded-full text-3xl text-brand-blue shadow-md shadow-gray-300 transition-all duration-200 ease-in hover:text-5xl hover:shadow-none "
      >
        {icon}
      </a>
      <div className="flex flex-col">
        <span className="text-lg font-bold capitalize">{name}</span>
        <p className="text-brand-black/40">{caption}</p>
      </div>
    </div>
  );
};

export default ContactItem;
