import { FuseNavigationItem } from "@fuse/components/navigation";


export const backofficemenudata:FuseNavigationItem[] = [
    {
        id   : 'client',
        title: 'Client',
        type: 'basic',
        //icon : 'Multicloud_Portal_icons-08',
        link : '/back-office/client'
    },
    {
        id   : 'contrat',
        title: 'Contrat',
        type: 'basic',
        //icon : 'Multicloud_Portal_icons-06',
        link : '/back-office/contrat'
    }, 
    {
        id   : 'user',
        title: 'Utilisateur',
        type: 'basic',
        //icon : 'Multicloud_Portal_icons-09',
        link : '/back-office/user'
    }
];

