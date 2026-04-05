export interface Skill {
  id: string;
  name: string;
  icon: string;
  description: string;
  level: number; // 0-100
  category: 'tech' | 'other';
}

export interface Competition {
  id: string;
  name: string;
  category: 'hackathon' | 'datathon' | 'startup' | 'certification' | 'competition';
  image: string;
  description: string;
  result: 'Winner' | 'Finalist' | 'Participant';
  technologies: string[];
  tags: string[];
  date: string;
  link?: string;
}

export interface Project {
  id: string;
  title: string;
  screenshot: string;
  techStack: string[];
  description: string;
  demoLink: string;
  githubLink: string;
  tags: string[];
  videoLink?: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  type: 'internship' | 'startup' | 'freelance' | 'competition' | 'certification';
  description: string;
  date: string;
  icon: string;
}
