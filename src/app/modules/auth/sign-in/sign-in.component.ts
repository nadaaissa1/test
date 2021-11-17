import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/modules/auth/services/auth.service';


@Component({
    selector: 'auth-sign-in',
    templateUrl: './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class AuthSignInComponent implements OnInit {
    @ViewChild('signInNgForm') signInNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    signInForm: FormGroup;
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _formBuilder: FormBuilder,
        private _router: Router,
        private authService: AuthService
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Create the form
        // this.signInForm = this._formBuilder.group({
        //     email     : ['hughes.brian@company.com', [Validators.required, Validators.email]],
        //     password  : ['admin', Validators.required],
        //     rememberMe: ['']
        // });

        this.signInForm = this._formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    get f() { return this.signInForm.controls; }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign in
     */
    signIn(): void {
        //  Return if the form is invalid
        if (this.signInForm.invalid) {
            this.signInErrorHandling;
        }

        // Disable the form
        this.signInForm.disable();

        // Hide the alert
        this.showAlert = false;
        this.authService.signIn(this.signInForm.value )
            .subscribe((response) => {
                var credentials = {'login': response.username , 'token':  response.accessToken , 'role': response.roles };
                localStorage.setItem('credentials',  JSON.stringify(credentials));
           
                this._router.navigate(["/dashboard"]);

            }, error =>{
                this.signInErrorHandling();
            }
            )
    }
    signInErrorHandling(): void {
         // Re-enable the form
         this.signInForm.enable();

         // Reset the form
         this.signInNgForm.resetForm();

         // Set the alert
         this.alert = {
             type: 'error',
             message: 'Wrong email or password'
         };

         // Show the alert
         this.showAlert = true;
    }
}
