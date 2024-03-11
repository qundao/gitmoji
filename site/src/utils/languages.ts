export const languageOptions: { [key: string]: string } = {
    en: 'English',
    zh: '中文',
};

export const defaultLanguage: string = "en";

export const getGitmojisPath = (lang: string): string => {
    const langPath = lang === defaultLanguage ? '' : `${lang}/`;
    return `../data/${langPath}gitmojis.json`;
};
