import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-momentjs',
  templateUrl: './momentjs.component.html'
})
export class MomentjsComponent implements OnInit {

  constructor() {



      let hora:string = moment().format('LLLL');
      console.log(hora);


  }


  ngOnInit() {
  }

}
