import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
import { App } from '@/config/app';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: App.i18n.locales,

  localePrefix: App.i18n.localePrefix,
  // Used when no locale matches
  defaultLocale: App.i18n.defaultLocale,
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} = createNavigation(routing);
