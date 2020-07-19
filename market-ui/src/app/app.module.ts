import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { WelcomeModule } from './welcome/welcome.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './app.reducer';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule,
    AuthModule,
    WelcomeModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
