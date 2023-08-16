import { Section, HeadingBlue, HeadingBlack } from '../components';

export const Portfolio: React.FC = () => {
  return (
    <Section id="portfolio" className="flex" bgGray>
      <div className="py-36 w-full flex flex-col">
        <HeadingBlue text="portfolio" />
        <HeadingBlack text="Each project is  " />
      </div>
    </Section>
  );
};

export default Portfolio;
