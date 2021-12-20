import { FuseNavigationItem } from "@fuse/components/navigation";


export const backofficemenudata:FuseNavigationItem[] = [
    {
        id   : 'client',
        title: 'Clients',
        type: 'basic',
        link : '/back-office/client'
    },
    {
        id   : 'contrat',
        title: 'Contrats',
        type: 'basic',
        link : '/back-office/contrat'
    }, 
    {
        id   : 'user',
        title: 'Utilisateurs',
        type: 'basic',
        link : '/back-office/user'
    }
];

