import { Component, OnInit } from '@angular/core';
import { HtmlService } from 'src/app/services/html.service';
@Component({
  selector: 'app-htmltextformatting',
  templateUrl: './htmltextformatting.component.html',
  styleUrls: ['./htmltextformatting.component.css']
})
export class HtmltextformattingComponent implements OnInit {

  basic: any[] = [];
  constructor(private htmlservice: HtmlService) { }

  ngOnInit(): void {
    this.basic = this.htmlservice.getlabel();
    console.log(this.basic);

  }

}
