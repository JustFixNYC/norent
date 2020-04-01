import { useEffect } from "react";
import { navigate } from "gatsby";

// Adapted from this very useful StackOverflow post: 
// https://stackoverflow.com/questions/59908989/redirect-based-on-browser-language-in-gatsby

const DEFAULT_LOCALE = "en";
const ACCEPTED_LOCALES = ["en", "es"];

const getRedirectLanguage = () => {
  if (typeof navigator === `undefined`) {
    return DEFAULT_LOCALE;
  }

  const lang = navigator && navigator.language && navigator.language.split("-")[0];
  if (!lang) return DEFAULT_LOCALE;

  
  return (
      ACCEPTED_LOCALES.includes(lang) 
        ? lang
        : DEFAULT_LOCALE
    );

};

const IndexPage = () => {
  useEffect(() => {
    const urlLang = getRedirectLanguage();

    navigate(`/${urlLang}`);
  }, []);

  return null;
};

export default IndexPage;