import { Component, Input, AfterViewInit} from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'indicator-component',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})
export class IndicatorComponent {
  @Input()
  id:number;

  @Input()
  name:string = "";

  @Input()
  isOnline: boolean;
  @Input()
  parent;

  deleteSelf() {
     this.parent.splice(this.parent.findIndex((x)=>(x.id == this.id)),1);
  }
}
