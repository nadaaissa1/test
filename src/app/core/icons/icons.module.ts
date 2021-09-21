import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@NgModule()
export class IconsModule
{
    /**
     * Constructor
     */
    constructor(
        private _domSanitizer: DomSanitizer,
        private _matIconRegistry: MatIconRegistry
    )
    {
        // Register icon sets
        this._matIconRegistry.addSvgIconSet(this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/material-twotone.svg'));
        this._matIconRegistry.addSvgIconSetInNamespace('mat_outline', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/material-outline.svg'));
        this._matIconRegistry.addSvgIconSetInNamespace('mat_solid', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/material-solid.svg'));
        this._matIconRegistry.addSvgIconSetInNamespace('iconsmind', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/iconsmind.svg'));
        this._matIconRegistry.addSvgIconSetInNamespace('feather', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/feather.svg'));
        this._matIconRegistry.addSvgIconSetInNamespace('heroicons_outline', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/heroicons-outline.svg'));
        this._matIconRegistry.addSvgIconSetInNamespace('heroicons_solid', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/heroicons-solid.svg'));
        this._matIconRegistry.addSvgIcon('Multicloud_Portal_icons-01', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/Multicloud_Portal_icons-08.svg'));
        this._matIconRegistry.addSvgIcon('Multicloud_Portal_icons-02', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/Multicloud_Portal_icons-08.svg'));
        this._matIconRegistry.addSvgIcon('Multicloud_Portal_icons-03', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/Multicloud_Portal_icons-08.svg'));
        this._matIconRegistry.addSvgIcon('Multicloud_Portal_icons-04', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/Multicloud_Portal_icons-08.svg'));
        this._matIconRegistry.addSvgIcon('Multicloud_Portal_icons-05', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/Multicloud_Portal_icons-08.svg'));
        this._matIconRegistry.addSvgIcon('Multicloud_Portal_icons-06', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/Multicloud_Portal_icons-08.svg'));
        this._matIconRegistry.addSvgIcon('Multicloud_Portal_icons-07', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/Multicloud_Portal_icons-08.svg'));
        this._matIconRegistry.addSvgIcon('Multicloud_Portal_icons-08', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/Multicloud_Portal_icons-08.svg'));
        this._matIconRegistry.addSvgIcon('Multicloud_Portal_icons-09', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/Multicloud_Portal_icons-08.svg'));
        this._matIconRegistry.addSvgIcon('Multicloud_Portal_icons-10', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/Multicloud_Portal_icons-08.svg'));
    }
}
