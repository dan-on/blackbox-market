import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { WideLogoComponent } from './layout/wide-logo/wide-logo.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

const sharedModules = [
  CommonModule,
  RouterModule,
  FontAwesomeModule,
  ReactiveFormsModule,
  HttpClientModule
];

const sharedComponents = [
  WideLogoComponent
];

@NgModule({
  imports: sharedModules,
  exports: [...sharedModules, sharedComponents],
  declarations: sharedComponents
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faUserPlus, faSignInAlt);
  }
}
