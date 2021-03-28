import { Component, ElementRef, ViewChild } from '@angular/core';
import { IndicatorComponent } from './indicator/indicator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("indicatorContainer")
  indicatorContainer: ElementRef;

  @ViewChild("status")
  newIndicatorStatus: ElementRef;

  @ViewChild("name")
  newIndicatorName: ElementRef;

  title = 'project11';
  lastId: number;
  public cards = [];

  constructor(){
    for (let i = 0; i < 10; i++) this.cards.push({id: i, status: this.randomStatus()});
    this.lastId = 9;
  }

  randomStatus() {
    return Boolean(Math.round(Math.random()));
  }

  createIndicator(): void {
    console.log(this.newIndicatorStatus.nativeElement.value)
    this.cards.push({id: ++this.lastId,
                  name: this.newIndicatorName.nativeElement.value,
                  status: this.newIndicatorStatus.nativeElement.value == "true"})
  }
}
