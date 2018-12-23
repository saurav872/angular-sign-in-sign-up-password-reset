import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/signup" routerLinkActive="active">SignUp</a>
      <a routerLink="/signin" routerLinkActive="active">SignIn</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SignIn-SingUp Page---Angular2';
}
