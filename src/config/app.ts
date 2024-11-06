import { I18N_LOCALE_PREFIX, I18N_LOCALES} from "@/global/const";
import { AppConfig } from "@/global/type";

export const App: AppConfig = {
    i18n: {
        defaultLocale: I18N_LOCALES[0],
        locales: I18N_LOCALES,
        localePrefix: I18N_LOCALE_PREFIX[0],
    },

}
