import { I18N_LOCALE_PREFIX, I18N_LOCALES } from "./const";

type Locale = (typeof I18N_LOCALES)[number]
type LocalePrefix = (typeof I18N_LOCALE_PREFIX)[number]

export type AppConfig = {
    i18n: I18nConfig;
}

export type MenuConfig = {
    title: string
    to?: string
    items?: readonly MenuItem[]
}

type MenuItem = {
    title: string
    to: string
}

type I18nConfig = {
    locales: readonly Locale[];
    defaultLocale: Locale;
    localePrefix: LocalePrefix;
}
