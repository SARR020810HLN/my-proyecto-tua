import { Component, OnInit } from '@angular/core';
import { HtmlService } from 'src/app/services/html.service';
@Component({
  selector: 'app-htmlheadings',
  templateUrl: './htmlheadings.component.html',
  styleUrls: ['./htmlheadings.component.css']
})
export class HtmlheadingsComponent implements OnInit {

  basic: any[] = [];
  constructor(private htmlservice: HtmlService) { }

  ngOnInit(): void {
    this.basic = this.htmlservice.getlabel();
    console.log(this.basic);

  }

}
