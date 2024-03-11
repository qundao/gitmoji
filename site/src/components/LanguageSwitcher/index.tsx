import { useRouter } from 'next/router';
import React from 'react';

const LanguageSwitcher = ({ onSwitch }) => {
  const router = useRouter();

  const switchLanguage = async (lang: string) => {
    const currentPath = router.pathname;
    const currentQuery = router.query;

    router.push({ pathname: currentPath, query: currentQuery }, currentPath, { locale: lang });
    onSwitch(lang);
  };

  return (
    <div>
      <button onClick={() => switchLanguage('en')}>Switch to English</button>
      <button onClick={() => switchLanguage('zh')}>切换到中文</button>
    </div>
  );
};

export default LanguageSwitcher;
