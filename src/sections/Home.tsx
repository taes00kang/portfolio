import { m } from 'framer-motion';
import { HeadingBlue, Section } from '../components';
import stacks from '../constants/stacks';
import {
  fadeInUp,
  listContainer,
  listItem,
  scaleUp,
} from '../constants/variants';

export const Home: React.FC = () => {
  return (
    <Section
      id="home"
      className="flex flex-col items-center justify-center"
      bgGray
    >
      <div className="flex w-full flex-grow flex-col-reverse items-center pt-24 md:flex-row">
        {/* Hero text */}
        <div className="my-12 flex flex-1 flex-col justify-center gap-8 px-4 sm:px-24 md:my-0 md:px-0">
          <m.h1
            className="w-full text-center text-3xl font-bold leading-tight sm:text-4xl md:text-left md:text-5xl lg:text-6xl"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{
              duration: 1,
            }}
          >
            Front-End React Developer 👋🏼
          </m.h1>
          <m.p
            className="text-center text-base font-medium leading-relaxed text-brand-black/60 md:text-left md:text-lg"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
          >
            Hi, I&apos;m Taesoo. A passionate Front-end React Developer based in
            New York. 📍
          </m.p>
        </div>
        {/* Hero Image */}
        <div className="flex w-full flex-[.8] items-center justify-center">
          <m.div
            className="aspect-square w-4/5 animate-morph border-2 border-brand-black bg-avatar bg-cover bg-no-repeat sm:max-md:w-1/2"
            variants={scaleUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              type: 'spring',
              bounce: 0.3,
            }}
          />
        </div>
      </div>
      {/* Stacks */}
      <div className="mb-20 flex w-full flex-col items-center whitespace-nowrap md:flex-row">
        <HeadingBlue text="my goto stacks" />
        <m.ul
          className="ml-0 mt-6 flex flex-wrap justify-center gap-4 md:ml-8 md:mt-0"
          variants={listContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {stacks.map((stack) => (
            <m.li key={stack.name} variants={listItem}>
              <img
                className="aspect-square w-16 rounded-full bg-brand-black"
                src={stack.image}
                alt={stack.name}
              />
            </m.li>
          ))}
        </m.ul>
      </div>
    </Section>
  );
};

export default Home;
