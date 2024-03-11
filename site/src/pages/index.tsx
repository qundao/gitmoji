import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast'
// import { gitmojis } from 'gitmojis'

import GitmojiList from 'src/components/GitmojiList'
import CarbonAd from 'src/components/CarbonAd'
import SEO from 'src/components/SEO'
import LanguageSwitcher from 'src/components/LanguageSwitcher';

const Home = () => {
  const [gitmojis, setGitmojis] = useState([]);

  const loadGitmojis = async (lang = 'en') => {
    const gitmojisModule = await import(
      `src/gitmojis/${lang === 'en' ? '' : `${lang}/`}gitmojis.json`
    );
    setGitmojis(gitmojisModule.gitmojis);
  };

  useEffect(() => {loadGitmojis();}, []);

  return (
    <>
      <SEO />
      <LanguageSwitcher onSwitch={(lang) => loadGitmojis(lang)} />
      <main>
        <CarbonAd />
        <GitmojiList gitmojis={gitmojis} />
        {/* <Toaster position="top-left" /> */}
      </main>
    </>
  );
};

export default Home
