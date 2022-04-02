import { Component, OnInit } from '@angular/core';
import { HtmlService } from 'src/app/services/html.service';

@Component({
  selector: 'app-htmlattributes',
  templateUrl: './htmlattributes.component.html',
  styleUrls: ['./htmlattributes.component.css']
})
export class HtmlattributesComponent implements OnInit {

  basic: any[] = [];
  constructor(private htmlservice: HtmlService) { }

  ngOnInit(): void {
    this.basic = this.htmlservice.getlabel();
    console.log(this.basic);

  }

}
