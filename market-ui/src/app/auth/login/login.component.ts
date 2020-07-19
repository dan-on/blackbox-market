import { Component, OnInit } from '@angular/core';
import * as fromApp from '../../app.reducer';
import { Store } from '@ngrx/store';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthSigningIn } from '../store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loggedIn: boolean;
  loginForm: FormGroup;

  constructor(private readonly store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  signIn(): void {
    this.store.dispatch(new AuthSigningIn(this.loginForm.value));
  }

}
