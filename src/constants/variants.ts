import type { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

export const fadeInLeft: Variants = {
  hidden: {
    x: 30,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

export const fadeInRight: Variants = {
  hidden: {
    x: -30,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

export const scaleUp: Variants = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
  },
};

export const listContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

export const listItem: Variants = {
  hidden: { opacity: 0, x: -50, scale: 0 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.2,
    },
  },
};
