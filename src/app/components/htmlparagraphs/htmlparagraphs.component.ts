import { Component, OnInit } from '@angular/core';
import { HtmlService } from 'src/app/services/html.service';
@Component({
  selector: 'app-htmlparagraphs',
  templateUrl: './htmlparagraphs.component.html',
  styleUrls: ['./htmlparagraphs.component.css']
})
export class HtmlparagraphsComponent implements OnInit {

  basic: any[] = [];
  constructor(private htmlservice: HtmlService) { }

  ngOnInit(): void {
    this.basic = this.htmlservice.getlabel();
    console.log(this.basic);

  }

}
