import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './screens/login/login.component';
import { SignupComponent } from './screens/signup/signup.component';
import { ApproutesModule } from './approutes/approutes.module';
import { PagenotfoundComponent } from './screens/pagenotfound/pagenotfound.component';
import { AuthService } from './auth.service';
import { HomeComponent } from './screens/home/home.component';
import { ResetComponent } from './screens/reset/reset.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PagenotfoundComponent,
    HomeComponent,
    ResetComponent,
  ],
  imports: [
    BrowserModule,
    ApproutesModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
