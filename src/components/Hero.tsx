import stacks from '../constants/stacks';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="w-full flex justify-center min-h-screen bg-gray-100"
    >
      <div className="container w-full max-w-[1000px] flex flex-col items-center justify-center pb-12">
        <div className="flex flex-grow w-full justify-between">
          <div className="flex-1 flex flex-col justify-center gap-8">
            <h1 className="text-6xl font-bold w-full">
              Front-End React Developer 👋🏼
            </h1>
            <p className="text-brand-black/60 font-medium text-lg">
              Hi, I&apos;m Taesoo. A passionate Front-end React Developer based
              in New York. 📍
            </p>
          </div>
          <div className="flex-[.8] flex items-center justify-center">
            <div className="w-4/5 aspect-square  border-brand-black border-4 animate-morph bg-avatar bg-no-repeat bg-cover" />
          </div>
        </div>
        <div className="flex w-full py-8 items-center">
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
      </div>
    </section>
  );
};

export default Hero;
