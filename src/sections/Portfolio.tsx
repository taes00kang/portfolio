import { Section, HeadingBlue, HeadingBlack, ProjectCard } from '../components';
import projects from '../constants/projects';

export const Portfolio: React.FC = () => {
  return (
    <Section id="projects" className="flex flex-col py-24 md:py-36" bgGray>
      <div className="mb-12 flex w-full flex-col">
        <HeadingBlue text="portfolio" />
        <HeadingBlack text="Venture through my code gallery 🎨" />
      </div>
      {/* Project List Start */}
      <div className="flex w-full flex-col gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {/* Project List End */}
    </Section>
  );
};

export default Portfolio;
