import { Component, OnInit } from '@angular/core';
import { HtmlService } from 'src/app/services/html.service';

@Component({
  selector: 'app-htmlcomments',
  templateUrl: './htmlcomments.component.html',
  styleUrls: ['./htmlcomments.component.css']
})
export class HtmlcommentsComponent implements OnInit {

  basic: any[] = [];
  constructor(private htmlservice: HtmlService) { }

  ngOnInit(): void {
    this.basic = this.htmlservice.getlabel();
    console.log(this.basic);

  }

}
