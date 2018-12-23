import { Component, OnInit } from '@angular/core';

import { AngularFireAuth  } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import * as firebase from 'firebase/app';
import { Router } from '@angular/router'


@Component({
  selector: 'reset-pwd',
  template: `
  <h1>Reset Password</h1>
  	<form #formData='ngForm' (ngSubmit)="onSubmit(formData)">
		<input type="text" placeholder="Email address.." (ngModel)="email" name="email" class="txt" required>
		<button type="submit" [disabled]="!formData.valid" class="basic-btn">Reset Password</button>
	</form>
	<span class="error" *ngIf="error">{{ error }}</span>
  `,
   styleUrls: ['./signup.component.css']
})

export class PasswordComponent { 
error: any;

	constructor(public afAuth: AngularFireAuth ,private router: Router) {
  }

  onSubmit(formData) {
    if(formData.valid) {
    	 this.afAuth.auth.sendPasswordResetEmail(formData.value.email).then(
    	 (success) => {
  		this.error="Password Reset Email sent";
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }
}