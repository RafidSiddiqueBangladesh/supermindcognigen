import { createContext } from 'react';

export type Lang = 'en' | 'bn';

export interface Translations {
  // Navbar
  navSkills: string;
  navCompetitions: string;
  navProjects: string;
  navExperience: string;
  navContact: string;
  navPortfolio: string;
  navViewPortfolio: string;
  navAdmin: string;

  // Hero
  heroName1: string;
  heroName2: string;
  heroBadge: string;
  heroSubtitle: string;
  heroViewProjects: string;
  heroCompetitions: string;
  heroContact: string;
  heroScroll: string;

  // Skills
  skillsBadge: string;
  skillsHeading: string;
  skillsSubtitle: string;
  skillsTech: string;
  skillsOther: string;

  // Competitions
  compBadge: string;
  compHeading: string;
  compSubtitle: string;
  filterAll: string;
  filterHackathon: string;
  filterDatathlon: string;
  filterStartup: string;
  filterCertification: string;
  filterCompetition: string;

  // Projects
  projBadge: string;
  projHeading: string;
  projSubtitle: string;
  projDemo: string;
  projGithub: string;

  // Timeline
  tlBadge: string;
  tlHeading: string;
  tlSubtitle: string;
  tlInternship: string;
  tlStartup: string;
  tlFreelance: string;
  tlCompetition: string;
  tlCertification: string;

  // Contact
  contactBadge: string;
  contactHeading: string;
  contactSubtitle: string;
  contactEmailTitle: string;
  contactEmail: string;
  contactResponseTitle: string;
  contactResponse: string;
  contactOpenTitle: string;
  contactOpen: string;
  contactName: string;
  contactNamePh: string;
  contactEmailLabel: string;
  contactEmailPh: string;
  contactMsg: string;
  contactMsgPh: string;
  contactSend: string;
  contactSent: string;
  contactThanks: string;

  // Stats
  statProjects: string;
  statAwards: string;
  statExperience: string;
  statSkills: string;

  // Footer
  footerBuilt: string;
}

export interface LangContextType {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
}

export const LangContext = createContext<LangContextType | undefined>(undefined);
