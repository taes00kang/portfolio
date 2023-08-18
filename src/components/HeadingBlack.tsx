interface Props {
  text: string;
}

export const HeadingBlack: React.FC<Props> = ({ text }) => {
  return <h2 className="my-4 text-xl sm:text-2xl font-bold">{text}</h2>;
};

export default HeadingBlack;
