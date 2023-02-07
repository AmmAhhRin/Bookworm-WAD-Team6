import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignupComponent } from '../signUp/signup.component';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(private dialog: MatDialog){

  }
  signup(){
    this.dialog.open(SignupComponent, {height: "85%", width: "40%"});
  }
}