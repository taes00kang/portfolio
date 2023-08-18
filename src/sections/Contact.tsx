/* eslint-disable @typescript-eslint/no-use-before-define */
import { FaEnvelopeOpenText, FaLinkedin } from 'react-icons/fa';
import { Section, HeadingBlue, HeadingBlack, ContactItem } from '../components';
import { ContactItemProps } from '../constants/interfaces';

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

export const Contact: React.FC = () => {
  return (
    <Section id="contact" className="py-12" removeScreenHeight>
      <HeadingBlue text="contact" />
      <HeadingBlack text="Don't be shy! Hit me up! 👇🏼" />
      <div className="flex flex-col sm:flex-row sm:items-center gap-12 my-8">
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

export default Contact;
