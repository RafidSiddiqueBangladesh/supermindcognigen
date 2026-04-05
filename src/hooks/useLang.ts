import { useContext } from 'react';
import { LangContext, type LangContextType } from '@/lib/lang-context';

export const useLang = (): LangContextType => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
};
