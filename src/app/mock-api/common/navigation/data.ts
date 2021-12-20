/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'dashboard',
        title: 'Tableau de bord',
        type : 'basic',
        icon : 'heroicons_outline:home', 
        link : '/dashboard'
    },
    // {
    //     id   : 'services',
    //     title: 'Services',
    //     type : 'basic',
    //     link : '/services'
    // },
    {
        id   : 'administration',
        title: 'Administration',
        type : 'basic',
        icon : 'heroicons_outline:globe-alt',
        link : '/administration'
    },
    {
        id   : 'contact',
        title: 'Contact',
        type : 'basic',
        icon : 'heroicons_solid:phone',
        link : '/contact'
    },
    {
        id   : 'back-office',
        title: 'Back-Office',
        type : 'collapsable',
        icon : 'feather:user',
        link : '/back-office',
        children: [
            {
                id        : 'back-office.client',
                title     : 'Client',
                type      : 'basic',
                link      : '/back-office/client',
                exactMatch: true
            },
            {
                id   : 'back-office.contrat',
                title: 'Contrat',
                type : 'basic',
                link : '/back-office/contrat'
            },
            {
                id   : 'back-office.guides',
                title: 'Utilisateur',
                type : 'basic',
                link : '/back-office/user'
            }
        ]
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'dashboard',
        title: 'Dashboard',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/dashboard'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'dashboard',
        title: 'Dashboard',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/dashboard'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'dashboard',
        title: 'Tableau de bord',
        type : 'basic', 
        icon : 'heroicons_outline:clipboard-check',
        link : '/dashboard'
    },
    // {
    //     id   : 'services',
    //     title: 'Services',
    //     type : 'basic',
    //     link : '/services'
    // },
    {
        id   : 'administration',
        title: 'Administration',
        type : 'basic',
        link : '/administration'
    },
    {
        id   : 'contact',
        title: 'Contact',
        type : 'basic',
        link : '/contact'
    },
    {
        id   : 'back-office',
        title: 'Back-Office',
<<<<<<< HEAD
        type : 'collapsable',
        link : '/back-office',
        children: [
            {
                id        : 'back-office.client',
                title     : 'Client',
                type      : 'basic',
                link      : '/back-office/client',
                exactMatch: true
            },
            {
                id   : 'back-office.contrat',
                title: 'Contrat',
                type : 'basic',
                link : '/back-office/contrat'
            },
            {
                id   : 'back-office.guides',
                title: 'Utilisateur',
                type : 'basic',
                link : '/back-office/user'
            }
        ]
=======
        type : 'basic',
       
>>>>>>> 2f0c67b0daafcdb887369f425779cd350eb48e19
    }
];
