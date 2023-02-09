import { Component, Input, OnInit} from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { LoginComponent } from '../authentication/login/login.component';
// import { BookCardComponent } from '../book-card/components/card/book-card.component';
import { VolumeInfo } from '../../models/volumeInfo/volume-info.interface';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent{
  @Input() volume: VolumeInfo | null = null;
   

  protected addBookToCart(volumeInfoDetail:any): void {
    console.log('from header', volumeInfoDetail);
    // if (this.volume?.id) {
    //   const url = location.origin + `/book-detail/${this.volume.id}`;
    //   window.open(url, '_blank');
    // }
  }

  // ngOnInit(){
  //   CommonService.aClickedEvent
  //   .subscribe((data:object) => {
  //     console.log('Event message from Component A: ' + data);
  //   });
  //   // this.addBookToCart((value:any) =>{
  //   //   console.log(value)
  //   // });

  // }

  // toggle:boolean = false;
  // constructor(private dialog: MatDialog){
  // }

  // togglemanu(){
  //   this.toggle = !this.toggle;
  // }
  // public getScreenWidth: any;
  // public getScreenHeight: any;
  
  // ngOnInit() {
  //     this.getScreenWidth = window.innerWidth;
  //     this.getScreenHeight = window.innerHeight;
  // }
  
  // @HostListener('window:resize', ['$event'])
  // onWindowResize() {
  //   this.getScreenWidth = window.innerWidth;
  //   this.getScreenHeight = window.innerHeight;
  // }
  // login() {
  //   this.dialog.open(LoginComponent);
  //   console.log('click')
  // }
  
}
