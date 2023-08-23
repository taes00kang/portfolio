import { m } from 'framer-motion';
import { ContactItemProps } from '../constants/interfaces';
import { listItem } from '../constants/variants';

export const ContactItem: React.FC<ContactItemProps> = ({
  name,
  link,
  caption,
  icon,
}) => {
  return (
    <m.div variants={listItem}>
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
    </m.div>
  );
};

export default ContactItem;
