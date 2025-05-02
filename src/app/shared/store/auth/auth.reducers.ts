import { createFeature, createReducer, on } from '@ngrx/store';
import { authActions } from './auth.actions';

const initialState = {
  user: null
};

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(authActions.signIn, (state, actions) => ({ ...state, user: actions.user }))
  )
});

export const { reducer: authReducers, selectUser, selectAuthState } = authFeature;
