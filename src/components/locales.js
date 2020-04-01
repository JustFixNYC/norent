export const DEFAULT_LOCALE = "en"; 
export const ACCEPTED_LOCALES = ["en", "es"];

export function standardizeLocale(locale) {
    return (ACCEPTED_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE);
}

export function localizeRoute(route, locale) {
    return '/' + standardizeLocale(locale) + route;
}