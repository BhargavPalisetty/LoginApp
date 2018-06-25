import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  async signUp(email: string, password: any) {
    return await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
      Response => Response
      )
      .catch(
      error => error
      );
  }

  async login(email: string, password: any) {
    return await firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
      Response => Response
      )
      .catch(
      error => error
      );
  }

  async reset(email: string) {
    return await firebase.auth().sendPasswordResetEmail(email).
      then(
      Response => Response
      ).catch(
      error => error
      );
  }
}
