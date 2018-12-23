import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SignUpComponent }      from './signup.component';
import { SignInComponent }  from './signin.component';
import { WelcomeComponent }  from './welcome.component';
import { PasswordComponent }  from './reset-pwd.component';

export const firebaseConfig = {
    apiKey: "AIzaSyCp-iy74uV0TrVEQia02mNum27q4EIelS8",
    authDomain: "reglogin-angular2.firebaseapp.com",
    databaseURL: "https://reglogin-angular2.firebaseio.com",
    projectId: "reglogin-angular2",
    storageBucket: "reglogin-angular2.appspot.com",
    messagingSenderId: "987629723468"
};

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    WelcomeComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
