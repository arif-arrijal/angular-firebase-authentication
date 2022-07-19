import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(result => {
        if (result.user) {
          this.router.navigate(['/dashboard'])
        }
      });
  }

}
