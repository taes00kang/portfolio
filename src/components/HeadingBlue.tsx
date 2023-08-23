import { m } from 'framer-motion';
import { fadeInUp } from '../constants/variants';

interface Props {
  text: string;
}

export const HeadingBlue: React.FC<Props> = ({ text }) => {
  return (
    <m.h3
      className="text-base font-bold uppercase text-brand-blue sm:text-lg"
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{
        duration: 1,
      }}
    >
      {text}
    </m.h3>
  );
};

export default HeadingBlue;
