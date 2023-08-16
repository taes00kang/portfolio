interface Props {
  text: string;
}

export const HeadingBlue: React.FC<Props> = ({ text }) => {
  return (
    <h3 className="uppercase text-brand-blue text-lg font-bold">{text}</h3>
  );
};

export default HeadingBlue;
