import { FuseNavigationItem } from "@fuse/components/navigation";


export const backofficemenudata:FuseNavigationItem[] = [
    {
        id   : 'client',
        title: 'Client',
        type: 'basic',
        link : '/back-office/client'
    },
    {
        id   : 'contrat',
        title: 'Contrat',
        type: 'basic',
        link : '/back-office/contrat'
    }, 
    {
        id   : 'user',
        title: 'Utilisateur',
        type: 'basic',
        link : '/back-office/user'
    }
];

