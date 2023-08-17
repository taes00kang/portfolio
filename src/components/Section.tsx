/* eslint-disable react/prop-types */
interface Props {
  id: string;
  children: React.ReactNode;
  bgGray?: boolean;
  className?: string;
  removeScreenHeight?: boolean;
}

export const Section: React.FC<Props> = ({
  id,
  children,
  bgGray = false,
  className,
  removeScreenHeight = false,
}) => {
  return (
    <section
      id={id}
      className={`w-full flex justify-center ${bgGray && 'bg-gray-100'} ${
        !removeScreenHeight && 'min-h-screen'
      }`}
    >
      <div className={`container w-full max-w-[1000px] ${className}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
