import React from 'react';
import { Link } from "gatsby";

export const DEFAULT_LOCALE = "en"; 
export const ACCEPTED_LOCALES = ["en", "es"];

export function standardizeLocale(locale) {
    return (ACCEPTED_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE);
}

export function localizeRoute(route, locale) {
    return '/' + standardizeLocale(locale) + route;
}

// This implementation only works for when we have two locales, en and es:
export const LanguageToggle = (props) => {
    const alternateLocale = props.locale === 'en' ? 'es' : 'en';
    return (
        <Link className="nr-language-toggle has-text-black is-uppercase" to={'/' + alternateLocale}>
            <span className={props.locale === "en" ? 'nr-is-underlined' : ''}>EN</span>
            /
            <span className={props.locale === "es" ? 'nr-is-underlined' : ''}>ESP</span>
        </Link>)
}