import { Component, OnInit } from '@angular/core';
import { HtmlService } from 'src/app/services/html.service';
@Component({
  selector: 'app-htmlstyles',
  templateUrl: './htmlstyles.component.html',
  styleUrls: ['./htmlstyles.component.css']
})
export class HtmlstylesComponent implements OnInit {
  basic: any[] = [];
  constructor(private htmlservice: HtmlService) { }

  ngOnInit(): void {
    this.basic = this.htmlservice.getlabel();
    console.log(this.basic);

  }

}
