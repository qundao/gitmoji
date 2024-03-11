import { useRouter } from 'next/router';
import React from 'react';
import { useLanguage } from 'src/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { switchLanguage } = useLanguage();

  return (
    <div>
      <button onClick={() => switchLanguage('en')}>Switch to English</button>
      <button onClick={() => switchLanguage('zh')}>切换到中文</button>
    </div>
  );
};

export default LanguageSwitcher;
