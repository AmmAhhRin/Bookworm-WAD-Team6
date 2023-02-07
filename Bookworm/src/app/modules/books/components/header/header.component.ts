import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../authentication/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  toggle:boolean = false;
  constructor(private dialog: MatDialog){
  }

  togglemanu(){
    this.toggle = !this.toggle;
  }
  public getScreenWidth: any;
  public getScreenHeight: any;
  
  ngOnInit() {
      this.getScreenWidth = window.innerWidth;
      this.getScreenHeight = window.innerHeight;
  }
  
  // @HostListener('window:resize', ['$event'])
  // onWindowResize() {
  //   this.getScreenWidth = window.innerWidth;
  //   this.getScreenHeight = window.innerHeight;
  // }
  login() {
    this.dialog.open(LoginComponent);
    console.log('click')
  }
  
}
