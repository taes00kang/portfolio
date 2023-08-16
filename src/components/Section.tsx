/* eslint-disable react/prop-types */
interface Props {
  id: string;
  children: React.ReactNode;
  bgGray?: boolean;
  className?: string;
}

export const Section: React.FC<Props> = ({
  id,
  children,
  bgGray = false,
  className,
}) => {
  return (
    <section
      id={id}
      className={`w-full flex justify-center min-h-screen ${
        bgGray && 'bg-gray-100'
      }`}
    >
      <div className={`container w-full max-w-[1000px] ${className}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
