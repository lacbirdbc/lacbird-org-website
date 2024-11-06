import { MenuConfig } from "@/global/type";

export const Menu: MenuConfig[] = [
    {
        title: 'menu-information',
        items:[
            
        ]
    },
    {
        title: 'menu-solution',
        items:[
            {
                title:'menu-service-account',
                to:'/account'
            }
        ]
    },
    {
        title: 'menu-developer',
        items:[
            {
                title:'menu-developer-dashboard',
                to:'/developer/dashboard'
            },
            {
                title:'menu-developer-documentation',
                to:'/docs'
            }
        ]
    },
    {
        title: 'menu-download',
        to: "/download"
    },
    {
        title: 'menu-sponsor',
        items:[
            
        ]
    }
] as const
