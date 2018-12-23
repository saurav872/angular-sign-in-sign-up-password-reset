import { Component } from '@angular/core';

import { AngularFireAuth  } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'my-signin',
  template: `
    <h1>Sign In</h1>
    <div id="form">
    <span class="error" *ngIf="error">{{ error }}</span>

    <form #formData='ngForm' (ngSubmit)="onSubmit(formData)">

      <input type="text" placeholder="Email address.." (ngModel)="email" name="email" class="txt" required>
      <input type="password" placeholder="Password" (ngModel)="password" name="password" class="txt" required>
      <re-captcha
    (ngModel)="captcha1"
    name="captcha1"
    required
    siteKey="6LcJ4TQUAAAAAPifxojTU7FLKF9ykioCpWH_5Z6s"
  	></re-captcha>
      <button type="submit" [disabled]="!formData.valid" class="basic-btn">Log in</button>
      <a routerLink="/signup" class="alc">Don't have an account?</a>
      <a routerLink="/frgtpwd" class="alc">Forgot Password?</a>
    </form>
  </div>
  `,
   styleUrls: ['./signup.component.css']
})
export class SignInComponent {
	
	error: any;

	constructor(public afAuth: AngularFireAuth ,private router: Router) {
  }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(this.afAuth);
      console.log(formData);
      this.afAuth.auth.signInWithEmailAndPassword(formData.value.email,formData.value.password).then(
        (success) => {
        if(this.afAuth.auth.currentUser.emailVerified){
        	console.log(success);
        	this.router.navigateByUrl('/welcome');
        }else {
        	this.error = "Please verify your email!";
        }
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      });
      }      
    }
 }