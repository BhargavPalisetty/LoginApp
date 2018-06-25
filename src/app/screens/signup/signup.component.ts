import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formstatus: string;
  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  async onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.pwd;
    const cpassword = form.value.cpwd;
    this.formstatus = '';
    if (email !== '' && password !== '' && cpassword !== '') {
      if (password === cpassword) {
        const res = await this.authservice.signUp(email, password);
        if (res.additionalUserInfo && res.additionalUserInfo.isNewUser === true) {
          this.formstatus = 'Signed Up Successfully';
        } else {
          this.formstatus = res.message;
        }
      } else {
        this.formstatus = 'Password and Confirm Password does not match';
      }
    } else if (email === '' || password === '' || cpassword === '') {
      this.formstatus = 'Cannot have Empty fields';
    }
  }
}
