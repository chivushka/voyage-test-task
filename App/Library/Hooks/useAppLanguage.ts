import { useLanguage } from './useLanguage';

export const useAppLanguage = () => {
  const languageHook = useLanguage({ 
    listenToSystemChanges: true 
  });

  return languageHook;
}; 