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
        className="w-20 aspect-square flex items-center justify-center text-brand-blue shadow-md shadow-gray-300 rounded-full text-3xl hover:text-5xl transition-all ease-in duration-200 hover:shadow-none "
      >
        {icon}
      </a>
      <div className="flex flex-col">
        <span className="capitalize font-bold text-lg">{name}</span>
        <p className="text-brand-black/40">{caption}</p>
      </div>
    </div>
  );
};

export default ContactItem;
