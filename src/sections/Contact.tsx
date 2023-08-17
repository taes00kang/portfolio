import { Section, HeadingBlue, HeadingBlack } from '../components';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" className="py-12" removeScreenHeight>
      <HeadingBlue text="contact" />
      <HeadingBlack text="Don't be shy! Hit me up! 👇🏼" />
      <div>??</div>
    </Section>
  );
};

export default Contact;
