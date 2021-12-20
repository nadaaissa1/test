import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { finalize, ignoreElements, takeUntil, takeWhile, tap } from 'rxjs/operators';
import { fuseAnimations } from '@fuse/animations';
import { FuseValidators } from '@fuse/validators';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/modules/auth/services/auth.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
    selector     : 'auth-reset-password',
    templateUrl  : './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AuthResetPasswordComponent implements OnInit
{
    @ViewChild('resetPasswordNgForm') resetPasswordNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: ''
    };
    resetPasswordForm: FormGroup;
    showAlert: boolean = false;
    resetToken: string = '';
    forgotPasswordPage: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private _formBuilder: FormBuilder,
        private route:ActivatedRoute,
        private _router: Router

    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this.route.queryParams.subscribe( (params) =>
            {
                
                this.resetToken = params['token']
                console.log(this.resetToken)
                if(this.resetToken.length>0){
                    this.resetPasswordForm = this._formBuilder.group({
                        password       : ['', Validators.required],
                        passwordConfirm: ['', Validators.required]
                    },
                    {
                        validators: FuseValidators.mustMatch('password', 'passwordConfirm')
                    }
                );
                this.forgotPasswordPage = true;
                }
               }
        );
            if(! this.forgotPasswordPage){
                this.resetPasswordForm = this._formBuilder.group({
                    oldPassword : ['', Validators.required],
                    password       : ['', Validators.required],
                    passwordConfirm: ['', Validators.required]
                },
                {
                    validators: FuseValidators.mustMatch('password', 'passwordConfirm')
                }
            );
            }

           
        
        // Create the form
   
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Reset password
     */
    resetPassword(): void
    {
        // Return if the form is invalid
        if (this.resetPasswordForm.invalid )
        {
            return;
        }

        // Disable the form
        this.resetPasswordForm.disable();

        // Hide the alert
        this.showAlert = false;
        if(this.forgotPasswordPage){
            const passwordChangeJson = {
                'token': this.resetToken,
                'password': this.resetPasswordForm.get('password').value
                
            };
            // Send the request to the server
            this._authService.resetForgottenPassword(passwordChangeJson)
                .pipe(
                    finalize(() => {
    
                        // Re-enable the form
                        this.resetPasswordForm.enable();
    
                        // Reset the form
                        this.resetPasswordNgForm.resetForm();
    
                        // Show the alert
                        this.showAlert = true;
                    })
                )
                .subscribe(
                    (response) => {
    
                        // Set the alert
                        this.alert = {
                            type   : 'success',
                            message: 'Your password has been reset.'
                        };
                        timer(1000, 1000)
                        .pipe(
                            finalize(() => {
                                this._router.navigate(['sign-in']);
                            }))
                        .subscribe();
                    },
                    (error) => {
    
                        // Set the alert
                        this.alert = {
                            type   : 'error',
                            message: 'Something went wrong, please try again.'
                        };
                    }
                );
        } else {
            const login = JSON.parse(localStorage.getItem('credentials')).login;
            const passwordChangeJson = {
                'oldPassword': this.resetPasswordForm.get('oldPassword').value,
                'password': this.resetPasswordForm.get('password').value
                
            };
            // Send the request to the server
            this._authService.changePassword(login, passwordChangeJson)
                .pipe(
                    finalize(() => {
    
                        // Re-enable the form
                        this.resetPasswordForm.enable();
    
                        // Reset the form
                        this.resetPasswordNgForm.resetForm();
    
                        // Show the alert
                        this.showAlert = true;
                    })
                )
                .subscribe(
                    (response) => {
    
                        // Set the alert
                        this.alert = {
                            type   : 'success',
                            message: 'Your password has been reset.'
                        };
                    },
                    (error) => {
    
                        // Set the alert
                        this.alert = {
                            type   : 'error',
                            message: 'Something went wrong, please try again.'
                        };
                    }
                );

        }
    
    }
}
