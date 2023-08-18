import { HeadingBlue, Section } from '../components';
import stacks from '../constants/stacks';

export const Hero: React.FC = () => {
  return (
    <Section
      id="home"
      className="flex flex-col items-center justify-center"
      bgGray
    >
      <div className="flex flex-grow w-full items-center pt-24 flex-col-reverse md:flex-row">
        {/* Hero text */}
        <div className="flex-1 flex flex-col justify-center gap-8 px-4 sm:px-24 md:px-0 my-12 md:my-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold w-full leading-tight text-center md:text-left">
            Front-End React Developer 👋🏼
          </h1>
          <p className="text-brand-black/60 font-medium text-base md:text-lg leading-relaxed text-center md:text-left">
            Hi, I&apos;m Taesoo. A passionate Front-end React Developer based in
            New York. 📍
          </p>
        </div>
        {/* Hero Image */}
        <div className="flex-[.8] flex items-center justify-center w-full">
          <div className=" sm:max-md:w-1/2 w-4/5 aspect-square border-brand-black border-2 animate-morph bg-avatar bg-no-repeat bg-cover" />
        </div>
      </div>
      {/* Stacks */}
      <div className="flex w-full items-center md:flex-row flex-col mb-20 whitespace-nowrap">
        <HeadingBlue text="my goto stacks" />
        <ul className="flex gap-4 flex-wrap ml-0 md:ml-8 mt-6 md:mt-0 justify-center">
          {stacks.map((stack) => (
            <li key={stack.name}>
              <img
                className="w-16 aspect-square bg-brand-black rounded-full"
                src={stack.image}
                alt={stack.name}
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Hero;
