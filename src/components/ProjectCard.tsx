import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import { Project } from '../constants/interfaces';

interface Props {
  project: Project;
}

export const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="w-full flex gap-6 h-[400px] bg-white shadow-md shadow-gray-200 rounded-xl p-8">
      <div className="group w-full max-w-[530px] h-full overflow-hidden rounded-xl shadow-md shadow-gray-200">
        <img
          src={project.image}
          alt={project.id}
          className="overflow-clip group-hover:-translate-y-[92%] duration-[16000ms] ease-in-out"
        />
      </div>
      <div className="flex flex-1 w-full flex-col items-center px-8">
        <p className="text-lg font-bold">{project.name}</p>
        <div className="flex flex-col flex-grow w-full py-4 ">
          <p className="text-brand-black/60 leading-relaxed">{project.desc}</p>
          <ul className="w-full pt-4 flex gap-2 flex-wrap">
            {project.stacks.map((stack) => (
              <li
                key={stack}
                className="py-1 px-3  rounded-full bg-brand-black text-white text-sm"
              >
                {stack}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full flex items-center gap-4 font-mulish">
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="text-lg flex items-center justify-center flex-1 py-2 shadow-md shadow-gray-300 rounded-md gap-2 hover:bg-brand-blue hover:text-white transition-colors duration-200"
          >
            Code{' '}
            <div className="text-2xl">
              <FaGithub />
            </div>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-lg flex items-center justify-center flex-1 py-2 shadow-md shadow-gray-300 rounded-md gap-2 hover:bg-brand-blue hover:text-white transition-colors duration-200"
          >
            Demo{' '}
            <div className="text-2xl">
              <FaExternalLinkAlt />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
