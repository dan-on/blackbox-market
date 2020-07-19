import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as fromApp from '../../app.reducer';
import { Store } from '@ngrx/store';
import { AuthSigningUp } from '../store/auth.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private readonly store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  signUp(): void {
    this.store.dispatch(new AuthSigningUp(this.registerForm.value));
  }
}
