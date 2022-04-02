import { Component, OnInit } from '@angular/core';
import { HtmlService } from 'src/app/services/html.service';

@Component({
  selector: 'app-htmlbasic',
  templateUrl: './htmlbasic.component.html',
  styleUrls: ['./htmlbasic.component.css']
})
export class HtmlbasicComponent implements OnInit {
  basic: any[] = [];
  constructor(private htmlservice: HtmlService) { }

  ngOnInit(): void {
    this.basic = this.htmlservice.getlabel();
    console.log(this.basic);

  }

}
