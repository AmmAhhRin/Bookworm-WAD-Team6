import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})




export class CommonService {
    @Output() aClickedEvent = new EventEmitter<object>();

    public AClicked(msg: object):void {
        this.aClickedEvent.emit(msg);
      }

}