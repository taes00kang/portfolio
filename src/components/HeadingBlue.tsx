interface Props {
  text: string;
}

export const HeadingBlue: React.FC<Props> = ({ text }) => {
  return (
    <h3 className="text-base font-bold uppercase text-brand-blue sm:text-lg">
      {text}
    </h3>
  );
};

export default HeadingBlue;
