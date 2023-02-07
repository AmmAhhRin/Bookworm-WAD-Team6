import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  constructor(private dialog:MatDialog){}
  login() {
    this.dialog.open(LoginComponent,{width: "40%", height: "70%"});
    console.log('click')
  }
}