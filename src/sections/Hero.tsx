import { Section } from '../components';
import stacks from '../constants/stacks';

export const Hero: React.FC = () => {
  return (
    <Section
      id="home"
      className="flex flex-col items-center justify-center"
      bgGray
    >
      <div className="flex flex-grow w-full items-center pt-24">
        {/* Hero text */}
        <div className="flex-1 flex flex-col justify-center gap-8">
          <h1 className="text-6xl font-bold w-full leading-tight">
            Front-End React Developer 👋🏼
          </h1>
          <p className="text-brand-black/60 font-medium text-lg leading-relaxed">
            Hi, I&apos;m Taesoo. A passionate Front-end React Developer based in
            New York. 📍
          </p>
        </div>
        {/* Hero Image */}
        <div className="flex-[.8] flex items-center justify-center">
          <div className="w-4/5 aspect-square  border-brand-black border-4 animate-morph bg-avatar bg-no-repeat bg-cover" />
        </div>
      </div>
      {/* Stacks */}
      <div className="flex w-full items-center md:flex-row flex-col mb-20">
        <div className="pr-8 mr-8 py-2 text-lg font-mulish md:border-r border-brand-black">
          My GoTo Stacks
        </div>
        <ul className="flex gap-4">
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
