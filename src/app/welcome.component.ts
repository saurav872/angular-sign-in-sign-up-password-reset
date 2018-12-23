import { Component,OnInit } from '@angular/core';
import { AngularFireAuth  } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'welcome',
  template: `
  <div [hidden]="!authIn">
    <h1>Welcome</h1>
    <button class="basic-btn" (click)="onSubmit()">Log Out</button>
    </div>
    <h3 [hidden]="authIn">Please <a routerLink="/signin" class="alc">login</a> to continue.</h3>
  `,
   styleUrls: ['./signup.component.css']
})

export class WelcomeComponent implements OnInit {
authIn: Boolean;

constructor(public afAuth: AngularFireAuth ,private router: Router) {
  }

  ngOnInit() {
    console.log(this.afAuth);
    if(this.afAuth.auth.currentUser == null){
      this.authIn=false;
    }
    else {
      this.authIn=true; 
    }
  }

  onSubmit() {
       this.afAuth.auth.signOut().then(
        (success) => {
        this.router.navigateByUrl('/signup')
      }).catch(
        (err) => {
        console.log(err);
      })
    }

 }