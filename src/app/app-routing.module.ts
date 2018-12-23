import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SignUpComponent }      from './signup.component';
import { SignInComponent }  from './signin.component';
import { WelcomeComponent }  from './welcome.component';
import { PasswordComponent }  from './reset-pwd.component';


const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'signup',  component: SignUpComponent },
  { path: 'signin',     component: SignInComponent },
  { path: 'welcome',     component: WelcomeComponent },
  { path: 'frgtpwd',     component: PasswordComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
