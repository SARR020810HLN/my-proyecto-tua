import { Component, OnInit } from '@angular/core';
import { HtmlService } from 'src/app/services/html.service';

@Component({
  selector: 'app-htmlelements',
  templateUrl: './htmlelements.component.html',
  styleUrls: ['./htmlelements.component.css']
})
export class HtmlelementsComponent implements OnInit {


  basic: any[] = [];
  constructor(private htmlservice: HtmlService) { }

  ngOnInit(): void {
    this.basic = this.htmlservice.getlabel();
    console.log(this.basic);

  }
}
