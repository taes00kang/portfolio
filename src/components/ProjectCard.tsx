import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { m } from 'framer-motion';
import { Project } from '../constants/interfaces';
import { LinkButton } from './LinkButton';
import { fadeInUp } from '../constants/variants';

interface Props {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<Props> = ({ project, index }) => {
  return (
    <m.div
      className={`flex h-full w-full flex-col gap-6 rounded-xl bg-white p-4 shadow-md shadow-gray-200 sm:p-8 lg:h-[400px]  ${
        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{
        duration: 1,
        delay: 0.5,
      }}
    >
      {/* Project image */}
      <a
        className="group aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md shadow-gray-200 lg:h-full lg:max-w-[530px]"
        href={project.demo}
        rel="noreferrer"
        target="_blank"
      >
        <img
          src={project.image}
          alt={project.id}
          className="w-full overflow-clip duration-[12000ms] ease-in-out group-hover:-translate-y-[80%]"
        />
      </a>
      {/* Project Info */}
      <div className="flex w-full flex-1 flex-col items-center px-4 md:px-8 md:py-4">
        <p className="text-xl font-bold lg:text-lg">{project.name}</p>
        <div className="flex w-full flex-grow flex-col py-8 lg:py-4 ">
          <p className="text-sm leading-relaxed text-brand-black/60 md:text-base">
            {project.desc}
          </p>
          <ul className="flex w-full flex-wrap gap-2 pt-4">
            {project.stacks.map((stack) => (
              <li
                key={stack}
                className="rounded-full bg-brand-black px-3 py-1 text-xs text-white md:text-sm"
              >
                {stack}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex w-full flex-col items-center gap-4 py-4 font-mulish text-brand-black/60 sm:flex-row">
          <LinkButton link={project.repo} name="code" icon={<FaGithub />} />
          <LinkButton
            link={project.demo}
            name="demo"
            icon={<FaExternalLinkAlt />}
          />
        </div>
      </div>
    </m.div>
  );
};

export default ProjectCard;
