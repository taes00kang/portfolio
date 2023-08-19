import { Section, HeadingBlue, HeadingBlack } from '../components';
import coder from '../assets/images/coder.png';
import textRing from '../assets/images/textring.svg';
import laptop from '../assets/images/laptop.jpeg';

export const About: React.FC = () => {
  return (
    <Section id="about" className="flex items-center justify-center">
      <div className="flex h-1/2 flex-col gap-12 py-24 md:flex-row md:py-0 lg:gap-24">
        {/* Images */}
        <div className="relative flex flex-1">
          {/* Main image */}
          <img
            className="w-full rounded-xl object-cover object-center"
            src={laptop}
            alt="laptop coffee desk"
          />
          {/* Spinning image */}
          <div className="absolute -bottom-16 -right-4 aspect-square w-40 rounded-full bg-white md:-bottom-8 md:-right-8 lg:w-52">
            <div className="relative flex h-full w-full items-center justify-center">
              <img
                src={textRing}
                alt="text frontend developer"
                className="w-full animate-spin-slow ease-in-out"
              />
              <img
                src={coder}
                alt="coder"
                className="absolute left-1/2 top-1/2 aspect-square w-12 -translate-x-1/2 -translate-y-1/2 lg:w-16"
              />
            </div>
          </div>
        </div>
        {/* Text */}
        <div className="mt-12 flex flex-1 flex-col md:mt-0">
          <HeadingBlue text="about me" />
          <HeadingBlack text="A dedicated Front-end Developer based in NY 📍" />
          <p className="text-sm leading-loose text-brand-black/60 sm:text-base sm:leading-relaxed">
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
