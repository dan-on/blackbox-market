import { Action } from '@ngrx/store';
import { UserCredentials } from '../user-credentials.model';
import { User } from '../user.model';

export const AUTH_SIGNING_IN = '[Auth] Auth signing in';
export const AUTH_SIGNED_IN = '[Auth] Successfully signed in';
export const AUTH_WRONG_CREDENTIALS = '[Auth] Wrong credentials';
export const AUTH_SIGNING_UP = '[Auth] Auth signing up';
export const AUTH_SIGNED_UP = '[Auth] Auth user signed up successfuly';
export const AUTH_SIGN_UP_ERROR = '[Auth] An error occured when user try sign up';

export class AuthSigningUp implements Action {
  readonly type = AUTH_SIGNING_UP;
  constructor(public payload: User) { }
}

export class AuthSignedUp implements Action {
  readonly type = AUTH_SIGNED_UP;
  constructor() { }
}

export class AuthSignUpError implements Action {
  readonly type = AUTH_SIGN_UP_ERROR;
  constructor() { }
}

export class AuthSigningIn implements Action {
  readonly type = AUTH_SIGNING_IN;
  constructor(public payload: UserCredentials) { }
}

export class AuthSignedIn implements Action {
  readonly type = AUTH_SIGNED_IN;
}

export class AuthWrongCredentials implements Action {
  readonly type = AUTH_WRONG_CREDENTIALS;
}

export type AuthActions = AuthSigningIn | AuthSignedIn | AuthWrongCredentials | AuthSigningUp | AuthSignedUp | AuthSignUpError;
