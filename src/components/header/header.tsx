import LacbirdLogo from "../logos/lacbird-logo";
import { HeaderNavigation } from "../navigation/header-navigation";
import { Button } from "../ui/button";
import {useTranslations} from 'next-intl';

export default function Header(){
    const t = useTranslations();
    return (
        <header className='flex items-center justify-between h-16 w-full px-4' >
            <div className="flex items-center">
                <LacbirdLogo/>
                <h1>{t("lacbird")}</h1>
                <HeaderNavigation/>
            </div>
            <Button> Exchange </Button>
        </header>
    );
}
