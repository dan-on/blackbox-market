import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WelcomeComponent
  }
];

@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class WelcomeModule { }
