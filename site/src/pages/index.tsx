import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast'

import GitmojiList from 'src/components/GitmojiList'
// import CarbonAd from 'src/components/CarbonAd'
// import SEO from 'src/components/SEO'
import { useLanguage } from 'src/contexts/LanguageContext';

const Home = () => {
  const { lang } = useLanguage();
  const [gitmojis, setGitmojis] = useState([]);

  useEffect(() => {
    async function loadGitmojis() {
      try {
        const module = await import(`src/gitmojis/${lang === 'en' ? '' : `${lang}/`}gitmojis.json`);
        setGitmojis(module.gitmojis);
      } catch (error) {
        console.error('Failed to load gitmojis:', error);
      }
    }
    loadGitmojis();
  }, [lang]);

  return (
    <>
      {/* <SEO /> */}
      <main>
        {/* <CarbonAd /> */}
        <GitmojiList gitmojis={gitmojis} />
        <Toaster position="top-left" />
      </main>
    </>
  );
};

export default Home
