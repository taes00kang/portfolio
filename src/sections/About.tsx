import { Section, HeadingBlue, HeadingBlack } from '../components';
import coder from '../assets/images/coder.png';
import textRing from '../assets/images/textring.svg';
import laptop from '../assets/images/laptop.jpeg';

export const About: React.FC = () => {
  return (
    <Section id="about" className="flex items-center justify-center">
      <div className="flex h-1/2 flex-col md:flex-row gap-12 lg:gap-24 py-24 md:py-0">
        {/* Images */}
        <div className="flex flex-1 relative">
          {/* Main image */}
          <img
            className="w-full object-cover object-center rounded-xl"
            src={laptop}
            alt="laptop coffee desk"
          />
          {/* Spinning image */}
          <div className="absolute -bottom-16 md:-bottom-8 -right-4 md:-right-8 w-40 lg:w-52 aspect-square bg-white rounded-full">
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={textRing}
                alt="text frontend developer"
                className="w-full animate-spin-slow ease-in-out"
              />
              <img
                src={coder}
                alt="coder"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 lg:w-16 aspect-square"
              />
            </div>
          </div>
        </div>
        {/* Text */}
        <div className="flex flex-col flex-1 mt-12 md:mt-0">
          <HeadingBlue text="about me" />
          <HeadingBlack text="A dedicated Front-end Developer based in NY 📍" />
          <p className="text-brand-black/60 text-sm sm:text-base leading-loose sm:leading-relaxed">
            Bringing a sincere love for web technologies and solid skills in
            React JS, I&apos;m thrilled to offer my expertise to an innovative
            organization. With hands-on UX/UI development experience, I&apos;m
            committed to growing alongside changing industry trends.
            <br />
            Cloud services, particularly AWS, captivate my interest, motivating
            me to join a team that values excellence. Through hard work and
            creative thinking, I hope to contribute positively as a valuable
            member, always open to learning and improving.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
