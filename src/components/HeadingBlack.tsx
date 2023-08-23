import { m } from 'framer-motion';
import { fadeInUp } from '../constants/variants';

interface Props {
  text: string;
}

export const HeadingBlack: React.FC<Props> = ({ text }) => {
  return (
    <m.h2
      className="my-4 text-xl font-bold sm:text-2xl"
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{
        duration: 1,
        delay: 0.3,
      }}
    >
      {text}
    </m.h2>
  );
};

export default HeadingBlack;
