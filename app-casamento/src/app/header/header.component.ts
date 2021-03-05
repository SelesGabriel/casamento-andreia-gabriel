import { interval, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  dataCasamento = new Date("Sep 25 2021");
  dataAtual = new Date();
  timeDifference: any;
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;
  diasRestantes: any;
  subscription: Subscription | undefined;
  segundosRestantes: any;

  ngOnInit(): void {
    this.subscription = interval(1000).subscribe(x => {this.getTimeDifference();});
  }

  private getTimeDifference()
  {
    this.timeDifference = this.dataCasamento.getTime() - this.dataAtual.getTime();
    this.allocateTimeUnits(this.timeDifference)
  }

  private allocateTimeUnits(timeDifference: any)
  {
    this.segundosRestantes = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.diasRestantes = Math.floor((timeDifference)/(this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  }


  constructor() { }


  ngOnDestroy(): void
  {
    this.subscription?.unsubscribe();
  }

}
