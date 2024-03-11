
import React, { useState, ChangeEvent } from 'react';
import { useLanguage } from 'src/contexts/LanguageContext';
import styles from './styles.module.css'
import LangIcon from './LangIcon'

const LanguageSwitcher = () => {
  const { lang, switchLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleChangeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    switchLanguage(event.target.value);
    setIsOpen(false); 
  };

  return (
    <div className={styles.languageSwitcher}>
      <div className={styles.languageToggle} onClick={() => setIsOpen(!isOpen)}>
      <LangIcon /><span>{lang === 'en' ? 'English' : '中文'} </span>
      </div>
      {isOpen && (
      <select value={lang} onChange={handleChangeLanguage} className="language-select" size={2}>
        <option value="en">English</option>
        <option value="zh">中文</option>
      </select>
      )}
    </div>
  );
};

export default LanguageSwitcher;
