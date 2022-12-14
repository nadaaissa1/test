import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';
import { ChoosePubComponent } from './modules/choose-pub/choose-pub.component';

// @formatter:off
// tslint:disable:max-line-length
export const appRoutes: Route[] = [

    // Redirect empty path to '/dashboard'
    {path: '', pathMatch : 'full', redirectTo: 'dashboard'},
    //{path: 'choose-pub', component: ChoosePubComponent},
    // Redirect signed in user to the '/dashboard'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'dashboard'},

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)},
            {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)},
            {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)},
            {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
            {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule)}        ]
    },
    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
        ]
    },
    {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)},

    // Landing routes
    {
        path: '',
        component  : LayoutComponent,
        data: {
            layout: 'empty'
        },
        children   : [
            {path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)},
        ]
    },

    // Admin routes
    {
        path       : '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [
            {path: 'choose-pub', loadChildren: () => import('app/modules/choose-pub/choose-pub.module').then(m => m.ChoosePubModule)},
            {path: 'dashboard', loadChildren: () => import('app/modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
            {path: 'services', loadChildren: () => import('app/modules/portalservices/portalservices.module').then(m => m.PortalServicesModule)},
            {path: 'administration', loadChildren: () => import('app/modules/administration/administration.module').then(m => m.AdministrationModule)},
            {path: 'contact', loadChildren: () => import('app/modules/contact/contact.module').then(m => m.ContactModule)},
            {path: 'back-office', loadChildren: () => import('app/modules/back-office/back-office.module').then(m => m.BackOfficeModule)},
            {path: 'profile', loadChildren: () => import('app/modules/profile/profile.module').then(m => m.ProfileModule)}        ]
    }
];
