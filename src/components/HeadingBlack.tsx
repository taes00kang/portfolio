interface Props {
  text: string;
}

export const HeadingBlack: React.FC<Props> = ({ text }) => {
  return <h2 className="my-4 text-xl font-bold sm:text-2xl">{text}</h2>;
};

export default HeadingBlack;
