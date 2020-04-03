import React from 'react';
import { Link } from "gatsby";
import classnames from 'classnames';

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
        <div className="nr-language-toggle">
            <Link className={classnames("is-uppercase", props.locale === "en" && 'nr-is-underlined nr-is-disabled')} to={'/' + alternateLocale}>
                In English
            </Link>
                {' / '}
            <Link className={classnames("is-uppercase", props.locale === "es" && 'nr-is-underlined nr-is-disabled')} to={'/' + alternateLocale}>
                En Español
            </Link>
        </div>
    )
}