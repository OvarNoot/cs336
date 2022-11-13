import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-survey-card',
  templateUrl: './survey-card.component.html',
  styleUrls: ['./survey-card.component.scss']
})
export class SurveyCardComponent implements OnInit {

  @Input() question: string | undefined; // 4 inputs for suvery card
  @Input() minValue: string | undefined;
  @Input() maxValue: string | undefined;
  @Input() unitValue: string | undefined;

  // for output
  @Output() result: EventEmitter<number> = new EventEmitter<number>();

  results = "";

  constructor() { }
  ngOnInit(): void {
  }
  // called everytime user moves slider and updates and emits the result
  sliderChanged(event: any){
    this.result.emit(event.value);
    this.results = event.value; // will update each of card differently
  }
}
