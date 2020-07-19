import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as AuthActions from './auth.actions';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { of } from 'rxjs';


@Injectable()
export class AuthEffects {

  @Effect()
  signingIn = this.actions$.pipe(
    ofType(AuthActions.AUTH_SIGNING_IN),
    switchMap((authData: AuthActions.AuthSigningIn) => {
      return this.authService.signIn(authData.payload).pipe(
          map(authResponse => {
            console.log(authResponse);
            return new AuthActions.AuthSignedIn();
          }),
          tap(() => {
            this.router.navigate(['/']);
          }),
          catchError(err => {
            return of(new AuthActions.AuthWrongCredentials());
          }),
        );
    })
  );

  @Effect()
  signingUp = this.actions$.pipe(
    ofType(AuthActions.AUTH_SIGNING_UP),
    switchMap((userData: AuthActions.AuthSigningUp) => {
      return this.authService.signUp(userData.payload).pipe(
        map(registerResponse => {
          return new AuthActions.AuthSignedUp();
        }),
        tap(() => {
          this.router.navigate(['/']);
        }),
        catchError(err => {
          return of(new AuthActions.AuthSignUpError());
        })
      );
    })
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) { }
}
