import React, { useState, ReactNode } from 'react';
import { LangContext, type Lang, type Translations, type LangContextType } from './lang-context';

export { LangContext };
export type { Lang, Translations, LangContextType };

// ────────────────── English ──────────────────
const en: Translations = {
  navSkills: 'Services',
  navCompetitions: 'Case Studies',
  navProjects: 'Projects',
  navExperience: 'Experience',
  navContact: 'Contact',
  navPortfolio: 'SuperMind Cognigen',
  navViewPortfolio: 'View Site',
  navAdmin: 'Admin',

  heroName1: 'SuperMind',
  heroName2: 'Cognigen',
  heroBadge: 'Agency Portfolio',
  heroSubtitle: 'Building fast, secure, and intelligent systems for the AI-driven future.',
  heroViewProjects: 'View Projects',
  heroCompetitions: 'Case Studies',
  heroContact: 'Contact Us',
  heroScroll: 'Scroll Down',

  skillsBadge: 'Company Services',
  skillsHeading: 'Services & Capabilities',
  skillsSubtitle: 'Digital services we provide for growth-focused businesses',
  skillsTech: 'Core Development Services',
  skillsOther: 'Creative and Growth Services',

  compBadge: 'Case Studies',
  compHeading: 'Winning Case Studies',
  compSubtitle: 'Short stories of what we built, how we solved challenges, and the recognition we achieved.',
  filterAll: 'All',
  filterHackathon: 'Hackathon',
  filterDatathlon: 'Datathon',
  filterStartup: 'Startup',
  filterCertification: 'Certification',
  filterCompetition: 'Competition',

  projBadge: 'Portfolio',
  projHeading: 'Projects',
  projSubtitle: 'A selection of my most impactful work',
  projDemo: 'Demo',
  projGithub: 'GitHub',

  tlBadge: 'Company Journey',
  tlHeading: 'From Agency Work to Founding',
  tlSubtitle: 'How real client problems, delivery experience, and cross-domain work shaped SuperMind Cognigen.',
  tlInternship: 'Agency Delivery',
  tlStartup: 'Business Growth',
  tlFreelance: 'Client Solutions',
  tlCompetition: 'Innovation Sprint',
  tlCertification: 'Capability Building',

  contactBadge: 'Get In Touch',
  contactHeading: "Let's Connect",
  contactSubtitle: 'Have a project in mind or want to collaborate? Drop me a message!',
  contactEmailTitle: 'Email Me',
  contactEmail: 'hello@portfolio.dev',
  contactResponseTitle: 'Quick Response',
  contactResponse: 'Usually within 24 hours',
  contactOpenTitle: 'Open to',
  contactOpen: 'Freelance, Contracts & Collabs',
  contactName: 'Name',
  contactNamePh: 'Your name',
  contactEmailLabel: 'Email',
  contactEmailPh: 'your@email.com',
  contactMsg: 'Message',
  contactMsgPh: 'Tell me about your project...',
  contactSend: 'Send Message',
  contactSent: 'Message Sent!',
  contactThanks: "Thanks! I'll get back to you soon 🚀",

  statProjects: 'Projects Delivered',
  statAwards: 'Awards & Competitions',
  statExperience: 'Service Domains',
  statSkills: 'Capabilities',

  footerBuilt: 'Built with',
};

// ────────────────── বাংলা ──────────────────
const bn: Translations = {
  navSkills: 'সেবা',
  navCompetitions: 'কেস স্টাডি',
  navProjects: 'প্রকল্প',
  navExperience: 'অভিজ্ঞতা',
  navContact: 'যোগাযোগ',
  navPortfolio: 'সুপারমাইন্ড কগনিজেন',
  navViewPortfolio: 'সাইট দেখুন',
  navAdmin: 'অ্যাডমিন',

  heroName1: 'সুপারমাইন্ড',
  heroName2: 'কগনিজেন',
  heroBadge: 'এজেন্সি পোর্টফোলিও',
  heroSubtitle: 'এআই-চালিত ভবিষ্যতের জন্য দ্রুত, নিরাপদ এবং বুদ্ধিমান সিস্টেম তৈরি করি।',
  heroViewProjects: 'প্রকল্প দেখুন',
  heroCompetitions: 'কেস স্টাডি',
  heroContact: 'আমাদের সাথে যোগাযোগ করুন',
  heroScroll: 'নিচে স্ক্রল করুন',

  skillsBadge: 'কোম্পানির সেবা',
  skillsHeading: 'সেবা ও সক্ষমতা',
  skillsSubtitle: 'বৃদ্ধিমুখী ব্যবসার জন্য আমাদের ডিজিটাল সেবাসমূহ',
  skillsTech: 'মূল ডেভেলপমেন্ট সেবা',
  skillsOther: 'ক্রিয়েটিভ ও গ্রোথ সেবা',

  compBadge: 'কেস স্টাডি',
  compHeading: 'জয়ী কেস স্টাডি',
  compSubtitle: 'আমরা কী করেছি, কীভাবে সমাধান করেছি, এবং কী স্বীকৃতি পেয়েছি তার সংক্ষিপ্ত গল্প।',
  filterAll: 'সব',
  filterHackathon: 'হ্যাকাথন',
  filterDatathlon: 'ডেটাথন',
  filterStartup: 'স্টার্টআপ',
  filterCertification: 'সার্টিফিকেশন',
  filterCompetition: 'প্রতিযোগিতা',

  projBadge: 'পোর্টফোলিও',
  projHeading: 'প্রকল্পসমূহ',
  projSubtitle: 'আমার সেরা কাজের একটি সংকলন',
  projDemo: 'ডেমো',
  projGithub: 'গিটহাব',

  tlBadge: 'কোম্পানির যাত্রা',
  tlHeading: 'এজেন্সি কাজ থেকে প্রতিষ্ঠা পর্যন্ত',
  tlSubtitle: 'বাস্তব সমস্যা সমাধান, ডেলিভারি অভিজ্ঞতা এবং বহুমাত্রিক কাজ থেকে SuperMind Cognigen গড়ে ওঠার গল্প।',
  tlInternship: 'এজেন্সি ডেলিভারি',
  tlStartup: 'বিজনেস গ্রোথ',
  tlFreelance: 'ক্লায়েন্ট সল্যুশন',
  tlCompetition: 'ইনোভেশন স্প্রিন্ট',
  tlCertification: 'দক্ষতা উন্নয়ন',

  contactBadge: 'যোগাযোগ করুন',
  contactHeading: 'চলুন সংযুক্ত হই',
  contactSubtitle: 'কোনো প্রকল্পের পরিকল্পনা আছে বা সহযোগিতা করতে চান? আমাকে বার্তা পাঠান!',
  contactEmailTitle: 'ইমেইল করুন',
  contactEmail: 'hello@portfolio.dev',
  contactResponseTitle: 'দ্রুত উত্তর',
  contactResponse: 'সাধারণত ২৪ ঘন্টার মধ্যে',
  contactOpenTitle: 'আগ্রহী',
  contactOpen: 'ফ্রিল্যান্স, চুক্তি ও সহযোগিতা',
  contactName: 'নাম',
  contactNamePh: 'আপনার নাম',
  contactEmailLabel: 'ইমেইল',
  contactEmailPh: 'your@email.com',
  contactMsg: 'বার্তা',
  contactMsgPh: 'আপনার প্রকল্প সম্পর্কে বলুন...',
  contactSend: 'বার্তা পাঠান',
  contactSent: 'বার্তা পাঠানো হয়েছে!',
  contactThanks: 'ধন্যবাদ! শীঘ্রই উত্তর দেব 🚀',

  statProjects: 'ডেলিভার্ড প্রকল্প',
  statAwards: 'পুরস্কার ও প্রতিযোগিতা',
  statExperience: 'সেবা ক্ষেত্র',
  statSkills: 'সক্ষমতা',

  footerBuilt: 'তৈরি করা হয়েছে',
};

// ────────────────── Context ──────────────────
const translations: Record<Lang, Translations> = { en, bn };

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = localStorage.getItem('portfolio-lang');
    return stored === 'bn' ? 'bn' : 'en';
  });

  const toggleLang = () =>
    setLang(prev => {
      const next = prev === 'en' ? 'bn' : 'en';
      localStorage.setItem('portfolio-lang', next);
      return next;
    });

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};
