
import React from 'react';
import { useEffect } from "react";
import { navigate } from "gatsby";
import { DEFAULT_LOCALE, standardizeLocale } from "../components/i18n";

// This is a dummy component for the root of our site that redirects people
// to a localized landing page based on their browser's preferred language
// 
// Adapted from this very useful StackOverflow post: 
// https://stackoverflow.com/questions/59908989/redirect-based-on-browser-language-in-gatsby

const getRedirectLanguage = () => {
  if (typeof navigator === `undefined`) {
    return DEFAULT_LOCALE;
  }

  const lang = navigator && navigator.language && navigator.language.split("-")[0];
  if (!lang) return DEFAULT_LOCALE;

  return standardizeLocale(lang);

};

const IndexPage = () => {
  useEffect(() => {
    const urlLang = getRedirectLanguage();

    navigate(`/${urlLang}`);
  }, []);

  return <></>;
};

export default IndexPage;
