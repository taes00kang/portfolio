/* eslint-disable @typescript-eslint/no-use-before-define */
import { FaEnvelopeOpenText, FaLinkedin } from 'react-icons/fa';
import { Section, HeadingBlue, HeadingBlack } from '../components';

interface ContactItemProps {
  name: string;
  link: string;
  caption: string;
  icon: JSX.Element;
}

export const Contact: React.FC = () => {
  const contacts: ContactItemProps[] = [
    {
      name: 'email',
      link: 'mailto:taesoo.dev@gmail.com',
      caption: 'Wanna say "Hi" to me?',
      icon: <FaEnvelopeOpenText />,
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/taesoo-kang',
      caption: "Let's get connected!",
      icon: <FaLinkedin />,
    },
  ];
  return (
    <Section id="contact" className="py-12" removeScreenHeight>
      <HeadingBlue text="contact" />
      <HeadingBlack text="Don't be shy! Hit me up! 👇🏼" />
      <div className="flex items-center gap-12 my-8">
        {contacts.map((contact) => (
          <ContactItem
            key={contact.name}
            name={contact.name}
            link={contact.link}
            caption={contact.caption}
            icon={contact.icon}
          />
        ))}
      </div>
    </Section>
  );
};

const ContactItem: React.FC<ContactItemProps> = ({
  name,
  link,
  caption,
  icon,
}) => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-20 aspect-square flex items-center justify-center text-brand-blue shadow-md shadow-gray-300 rounded-full text-3xl">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="capitalize font-bold text-lg">{name}</span>
        <a
          target="_blank"
          rel="noreferrer"
          href={link}
          className="text-brand-black/40 hover:text-brand-blue transition-colors duration-200 ease-in"
        >
          {caption}
        </a>
      </div>
    </div>
  );
};

export default Contact;
