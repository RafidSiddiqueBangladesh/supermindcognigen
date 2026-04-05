import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Skill, Competition, Project, TimelineItem } from './types';
import { initialSkills, initialCompetitions, initialProjects, initialTimeline } from './data';

interface DataContextType {
  skills: Skill[];
  competitions: Competition[];
  projects: Project[];
  timeline: TimelineItem[];
  setSkills: (s: Skill[]) => void;
  setCompetitions: (c: Competition[]) => void;
  setProjects: (p: Project[]) => void;
  setTimeline: (t: TimelineItem[]) => void;
  addCompetition: (c: Competition) => void;
  updateCompetition: (c: Competition) => void;
  deleteCompetition: (id: string) => void;
  addProject: (p: Project) => void;
  updateProject: (p: Project) => void;
  deleteProject: (id: string) => void;
  addSkill: (s: Skill) => void;
  deleteSkill: (id: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [skills, setSkills] = useState<Skill[]>(initialSkills);
  const [competitions, setCompetitions] = useState<Competition[]>(initialCompetitions);
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [timeline, setTimeline] = useState<TimelineItem[]>(initialTimeline);

  const addCompetition = (c: Competition) => setCompetitions(prev => [c, ...prev]);
  const updateCompetition = (c: Competition) => setCompetitions(prev => prev.map(x => x.id === c.id ? c : x));
  const deleteCompetition = (id: string) => setCompetitions(prev => prev.filter(x => x.id !== id));

  const addProject = (p: Project) => setProjects(prev => [p, ...prev]);
  const updateProject = (p: Project) => setProjects(prev => prev.map(x => x.id === p.id ? p : x));
  const deleteProject = (id: string) => setProjects(prev => prev.filter(x => x.id !== id));

  const addSkill = (s: Skill) => setSkills(prev => [...prev, s]);
  const deleteSkill = (id: string) => setSkills(prev => prev.filter(x => x.id !== id));

  return (
    <DataContext.Provider value={{
      skills, competitions, projects, timeline,
      setSkills, setCompetitions, setProjects, setTimeline,
      addCompetition, updateCompetition, deleteCompetition,
      addProject, updateProject, deleteProject,
      addSkill, deleteSkill,
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error('useData must be used within DataProvider');
  return ctx;
};
