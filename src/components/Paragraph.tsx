interface Props {
  children: React.ReactNode;
  className: string;
}

export const Paragraph: React.FC<Props> = ({ children, className }) => {
  return (
    <p className="text-brand-black/60 text-sm sm:text-base leading-loose sm:leading-relaxed">
      {}
    </p>
  );
};

export default Paragraph;
