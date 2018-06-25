import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formstatus: string;
  constructor(private authservice: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  async onlogin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.pswd;
    if (email && password) {
      const res = await this.authservice.login(email, password);
      console.log(res);
      if (res.additionalUserInfo && res.additionalUserInfo.isNewUser === false) {
        this._router.navigate(['home']);
      } else {
        this.formstatus = res.message;
      }
    } else {
      this.formstatus = 'Cannot have Empty fields';
    }
  }
}
