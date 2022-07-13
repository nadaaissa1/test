import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/modules/userSpace/auth/services/auth.service';
import { AuthSignInComponent } from './sign-in.component';
import { autoSpy } from 'auto-spy';






describe('AuthSignInComponent', () => {
  
  let component: AuthSignInComponent;
  it('when ngOnInit is called it should', () => {
    // arrange
    const { build } = setup().default();
    const a = build();
    // act
    a.ngOnInit();
    // assert
    // expect(a).toEqual
  });
  it('when signIn is called it should', () => {
    
  // arrange
  const { build } = setup().default();
  const a = build();
  a.signInForm.controls['username'].setValue('asd@asd.com');
  a.signInForm.controls['password'].setValue('aada');
  // act
  a.signIn()
  // expect(a).toEqual

  });
  it('when signInErrorHandling is called it should', () => {
    // arrange
    const { build } = setup().default();
    const a = build();
    // act
    a.signInErrorHandling();
    // assert
    // expect(a).toEqual
  });
  
});


function setup() {
  const _activatedRoute = autoSpy(ActivatedRoute);
const _formBuilder = autoSpy(FormBuilder);
const _router = autoSpy(Router);
const authService = autoSpy(AuthService);
  const builder = {
    _activatedRoute,
_formBuilder,
_router,
authService,
    default() {
      return builder;
    },
    build() {
      return new AuthSignInComponent(_activatedRoute,_formBuilder,_router,authService);
    }
  };

  return builder;
}