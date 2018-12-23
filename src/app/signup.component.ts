import { Component, OnInit } from '@angular/core';

import { AngularFireAuth  } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'my-signup',
  template: `
  <h1>SignUp</h1>
  <div id="form">
    <span class="error" *ngIf="error">{{ error }}</span>
    
  <form #formData='ngForm' (ngSubmit)="onSubmit(formData)">

    <input type="text" placeholder="Email address.." (ngModel)="email" name="email" class="txt" required>
    <input type="password" placeholder="Password" (ngModel)="password" name="password" class="txt" required>
    <re-captcha
    (ngModel)="captcha"
    name="captcha"
    required
    siteKey="6LcJ4TQUAAAAAPifxojTU7FLKF9ykioCpWH_5Z6s"
  	></re-captcha>

    <button type="submit" [disabled]="!formData.valid" class="basic-btn">Create my account</button>
    <a routerLink="/signin" class="alc">Have an account.Login?</a>
  </form>
  </div>
  `,
   styleUrls: ['./signup.component.css']
})
export class SignUpComponent { 
	error: any;

	constructor(public afAuth: AngularFireAuth ,private router: Router) {
  }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(this.afAuth);
      console.log(formData);
      this.afAuth.auth.createUserWithEmailAndPassword(formData.value.email,formData.value.password).then(
        (success) => {
        console.log(success);
         success.sendEmailVerification(); 
        this.router.navigateByUrl('/signin')
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
      
    }
  }