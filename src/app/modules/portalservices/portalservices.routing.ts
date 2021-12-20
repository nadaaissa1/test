import { ActivatedRouteSnapshot, Route, UrlMatchResult, UrlSegment } from '@angular/router';
import { isEqual } from 'lodash-es';
import { BaasoncloudComponent } from './baasoncloud/baasoncloud.component';
import { BaastocloudComponent } from './baastocloud/baastocloud.component';
import { DraasComponent } from './draas/draas.component';
import { IaasComponent } from './iaas/iaas.component';
import { PortalServicesListComponent } from './list/list.component';
import { PortalServicesComponent } from './portalservices.component';

export const portalservicesRouteMatcher: (url: UrlSegment[]) => UrlMatchResult = (url: UrlSegment[]) => {

    let consumed = url;
    const posParams = {};

    if ( url[0].path === 'settings' )
    {
        return null;
    }
    else if ( url[0].path === 'filter' || url[0].path === 'label' )
    {
        posParams[url[0].path] = url[1];
        posParams['page'] = url[2];
        if ( url[3] )
        {
            consumed = url.slice(0, -1);
        }
    }
    else
    {
        posParams['folder'] = url[0];
        posParams['page'] = url[1];
        if ( url[2] )
        {
            consumed = url.slice(0, -1);
        }
    }

    return {
        consumed,
        posParams
    };
};

export const portalservicesRunGuardsAndResolvers: (from: ActivatedRouteSnapshot, to: ActivatedRouteSnapshot) => boolean = (from: ActivatedRouteSnapshot, to: ActivatedRouteSnapshot) => {

    let fromCurrentRoute = from;
    while ( fromCurrentRoute.firstChild )
    {
        fromCurrentRoute = fromCurrentRoute.firstChild;
    }

    let toCurrentRoute = to;
    while ( toCurrentRoute.firstChild )
    {
        toCurrentRoute = toCurrentRoute.firstChild;
    }
    if ( fromCurrentRoute.paramMap.get('id') && !toCurrentRoute.paramMap.get('id') )
    {
        return true;
    }
    
    const fromParams = {};
    const toParams = {};

    from.paramMap.keys.forEach((key) => {
        fromParams[key] = from.paramMap.get(key);
    });

    to.paramMap.keys.forEach((key) => {
        toParams[key] = to.paramMap.get(key);
    });

    if ( isEqual(fromParams, toParams) )
    {
        return false;
    }

    return true;
};

export const PortalServicesRoutes: Route[] = [    
    {
        path     : '',
        component: PortalServicesComponent,
        children: [
            {
                path     : '',
                component: PortalServicesListComponent,
                
                children: [
                    {
                        path     : '',
                        redirectTo: 'iaas'
                    },
                    {
                        path     : 'iaas',
                        component: IaasComponent
                    },
                    {
                        path     : 'draas',
                        component: DraasComponent,
                    },
                    {
                        path     : 'baasOnCloud',
                        component: BaasoncloudComponent,
                    },
                    {
                        path     : 'baasToCloud',
                        component: BaastocloudComponent,
                    },
                    {
                        path     : 'nouvellecommandevmware',
                        component: IaasComponent
                    },
                    {
                        path     : '**',
                        redirectTo: 'iaas'
                    }
                ]
            }
            
        ]
    }
];
