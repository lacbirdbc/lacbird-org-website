import { cn } from "@/lib/utils";
import { Menu } from '@/config/menu'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { useTranslations } from 'next-intl';
export function HeaderNavigation() {
    const t = useTranslations();
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {Menu.map((menu, index) => (
                    <NavigationMenuItem key={index}>
                        <NavigationMenuTrigger className={cn("flex items-center py-1 focus:outline-none text-sm font-medium transition-colors hover:text-primary text-foreground")}>
                            {t(menu.title)}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
        // <nav className='flex flex-row'>
        //    { Menu.map((menu,item) =>
        //     menu.items !== undefined ? (
        //         <div>Test with item {t(menu.title)}</div>
        //     ) :(<div>
        //         Test no item
        //     </div>))
        // }
        // </nav>
    );
}
