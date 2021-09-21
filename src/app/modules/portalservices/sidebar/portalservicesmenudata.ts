import { FuseNavigationItem } from "@fuse/components/navigation";


export const portalservicesmenudata:FuseNavigationItem[] = [
    {
        id   : 'iaas',
        title: 'IaaS',
        type: 'basic',
        icon : 'Multicloud_Portal_icons-08',
        link : '/services/iaas'
    },
    {
        id   : 'draas',
        title: 'DRaaS',
        type: 'basic',
        icon : 'Multicloud_Portal_icons-06',
        link : '/services/draas'
    }, 
    {
        id   : 'baasOnCloud',
        title: 'BaaSOnCloud',
        type: 'basic',
        icon : 'Multicloud_Portal_icons-09',
        link : '/services/baasOnCloud'
    },
    {
        id   : 'baasToCloud',
        title: 'BaaSToCloud',
        type: 'basic',
        icon : 'Multicloud_Portal_icons-09',
        link : '/services/baasToCloud'
    }
];

