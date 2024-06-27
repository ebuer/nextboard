import { InitOptions } from 'i18next';
export const fallbackLng = 'en'
export const languages = [fallbackLng, 'de', 'tr']
export const defaultNS = 'global'
export const cookieName = 'i18next'


export function getOptions(lng: string = fallbackLng, ns: string = defaultNS): InitOptions {
    return {
        // debug: true,
        supportedLngs: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns,
    };
}