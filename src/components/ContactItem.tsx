import { ContactItemProps } from '../constants/interfaces';

export const ContactItem: React.FC<ContactItemProps> = ({
  name,
  link,
  caption,
  icon,
}) => {
  return (
    <div className="">
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className="group flex items-center gap-6 sm:gap-4"
      >
        <div className="flex aspect-square w-20 items-center justify-center rounded-full text-3xl text-brand-blue shadow-md shadow-gray-300 transition-all duration-200 ease-in group-hover:text-5xl group-hover:shadow-none ">
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold capitalize">{name}</span>
          <p className="text-brand-black/40">{caption}</p>
        </div>
      </a>
    </div>
  );
};

export default ContactItem;
