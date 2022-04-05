import { Component, OnInit } from '@angular/core';
import { HtmlService } from 'src/app/services/html.service';
@Component({
  selector: 'app-htmlquotationandcitationelements',
  templateUrl: './htmlquotationandcitationelements.component.html',
  styleUrls: ['./htmlquotationandcitationelements.component.css']
})
export class HtmlquotationandcitationelementsComponent implements OnInit {


  basic: any[] = [];
  constructor(private htmlservice: HtmlService) { }

  ngOnInit(): void {
    this.basic = this.htmlservice.getlabel();
    console.log(this.basic);

  }

}
