import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  formstatus: any;
  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  async onReset(form: NgForm) {
    const email = form.value.email;
    if (email) {
      const res = await this.authservice.reset(email);
      if (res !== undefined) {
        this.formstatus = res.message;
      } else {
        this.formstatus = 'Reset Link has been sent to your email !!';
      }
    } else {
      this.formstatus = 'Please provide a valid email';
    }
  }
}
