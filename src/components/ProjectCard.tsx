import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from '../constants/interfaces';
import { LinkButton } from './LinkButton';

interface Props {
  project: Project;
}

export const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="flex h-full w-full flex-col gap-6 rounded-xl bg-white p-4 shadow-md shadow-gray-200 sm:p-8 lg:h-[400px] lg:flex-row">
      {/* Project image */}
      <div className="group aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md shadow-gray-200 lg:h-full lg:max-w-[530px]">
        <img
          src={project.image}
          alt={project.id}
          className="overflow-clip duration-[16000ms] ease-in-out group-hover:-translate-y-[92%]"
        />
      </div>
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
    </div>
  );
};

export default ProjectCard;
