import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../screens/login/login.component';
import { SignupComponent } from '../screens/signup/signup.component';
import { PagenotfoundComponent } from '../screens/pagenotfound/pagenotfound.component';
import { HomeComponent } from '../screens/home/home.component';
import { ResetComponent } from '../screens/reset/reset.component';


const appRoutes: Routes = [
  {path: 'signup' , component: SignupComponent  },
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'reset', component: ResetComponent},
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class ApproutesModule { }
