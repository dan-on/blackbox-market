import * as AuthActions from './auth.actions';

export interface State {
  loggedIn: boolean;
}

const initialState: State = {
  loggedIn: false
};

export function authReducer(state = initialState, action: AuthActions.AuthActions): State {
  switch (action.type) {
    case AuthActions.AUTH_SIGNED_IN:
      return {
        ...state,
        loggedIn: true
      };
    default:
      return state;
  }
}
