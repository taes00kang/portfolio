import { Section, HeadingBlue, HeadingBlack } from '../components';
import coder from '../assets/images/coder.png';
import textRing from '../assets/images/textring.svg';
import laptop from '../assets/images/laptop.jpeg';

export const About: React.FC = () => {
  return (
    <Section id="about" className="flex items-center justify-center">
      <div className="flex h-1/2 gap-24">
        {/* Images */}
        <div className="flex flex-1 relative">
          {/* Main image */}
          <img
            className="w-full object-cover object-center rounded-xl"
            src={laptop}
            alt="laptop coffee desk"
          />
          {/* Spinning image */}
          <div className="absolute -bottom-8 -right-8 w-52 aspect-square bg-white rounded-full">
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={textRing}
                alt="text frontend developer"
                className="w-full animate-spin-slow ease-in-out"
              />
              <img
                src={coder}
                alt="coder"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 aspect-square"
              />
            </div>
          </div>
        </div>
        {/* Text */}
        <div className="flex flex-col flex-1">
          <HeadingBlue text="about me" />
          <HeadingBlack text="A dedicated Front-end Developer based in NY 📍" />
          <p className="text-brand-black/60 leading-relaxed">
            As a highly motivated web developer with a strong passion for web
            technologies, I am eager to contribute my expertise to a dynamic and
            innovative organization. With hands-on experience in and a focus on
            UX/UI design, I constantly strive to improve and stay current with
            industry advancements.
            <br /> I also have a major interest in cloud services, especially
            AWS, and look forward to joining a forward-thinking team committed
            to excellence. With dedication and creativity, I am confident I can
            make a meaningful impact as a valuable asset to your organization.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
