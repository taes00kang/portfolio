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
      className={`flex w-full justify-center ${bgGray && 'bg-gray-100'} ${
        !removeScreenHeight && 'min-h-screen'
      }`}
    >
      <div
        className={`container h-full w-full max-w-[1000px] md:h-auto ${className} px-8 lg:px-0`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
