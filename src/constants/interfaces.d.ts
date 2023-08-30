export interface Project {
  id: string;
  name: string;
  desc: string;
  stacks: string[];
  image: string;
  repo: string;
  demo: string;
  themeColor: string[];
}

export interface ContactItemProps {
  name: string;
  link: string;
  caption: string;
  icon: JSX.Element;
}
