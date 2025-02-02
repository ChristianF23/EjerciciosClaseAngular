import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';


interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
  type: 'success',
  message: 'This is an success alert'
},
{
  type: 'info',
  message: 'This is an info alert'
},
{
  type: 'warning',
  message: 'This is a warning alert'
},
{
  type: 'danger',
  message: 'This is a danger alert'
}, 
{
  type: 'primary',
  message: 'This is a primary alert',
}, 
{
  type: 'secondary',
  message: 'This is a secondary alert',
}, 
{
  type: 'light',
  message: 'This is a light alert',
}, 
{
  type: 'dark',
  message: 'This is a dark alert',
}
];

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  alerts: Alert[];

  constructor() { 
    this.reset();
  }

  ngOnInit(): void {
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

}
