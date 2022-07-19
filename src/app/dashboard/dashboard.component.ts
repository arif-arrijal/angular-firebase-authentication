import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public auth: AngularFireAuth, public router: Router) {
  }

  logout() {
    this.auth.signOut().then(result => {
      this.router.navigate(['/login'])
    });
  }

  ngOnInit(): void {
  }

}
