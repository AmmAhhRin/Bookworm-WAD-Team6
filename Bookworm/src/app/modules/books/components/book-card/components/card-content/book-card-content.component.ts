import { Component, EventEmitter, Input, Output, Injectable } from '@angular/core';
import { VolumeInfo } from '../../../../models/volumeInfo/volume-info.interface';
import { CommonService } from 'src/app/modules/books/services/common.service';

@Component({
  selector: 'app-book-card-content',
  templateUrl: './book-card-content.component.html',
  styleUrls: ['./book-card-content.component.scss'],
})
export class BookCardContentComponent {
  @Input() volumeInfo: VolumeInfo | null = null;

  @Output() detailButtonClick: EventEmitter<unknown> =
    new EventEmitter<unknown>();

  @Output() cartButtonClick: EventEmitter<unknown> =
    new EventEmitter<unknown>();  
  
  @Output() emitItemToHeader: EventEmitter<unknown> =
  new EventEmitter<unknown>();  

  protected onDetailButtonClick(): void {
    this.detailButtonClick.emit();
  }
  // protected onCartButtonClick(): void {
  //   CommonService.AClicked(this.volumeInfo);
  //   // console.log(this.volumeInfo)
  //   // this.cartButtonClick.emit();
  //   // this.emitItemToHeader.emit(this.volumeInfo);
  // }

  

}
