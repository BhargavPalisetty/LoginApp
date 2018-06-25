import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';

    ngOnInit() {
      firebase.initializeApp({
        apiKey: 'AIzaSyCAGtKXgqFoHdgqVSEltrt2t2VsI1vfekw',
        authDomain: 'signuppage-b29f1.firebaseapp.com'
      });
    }

  }

