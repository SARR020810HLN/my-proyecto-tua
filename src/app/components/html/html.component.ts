import { Component, OnInit } from '@angular/core';
import { HtmlService } from 'src/app/services/html.service';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
  
})
export class HTMLComponent implements OnInit {

  label: any[] = [];
  
  constructor(private HtmlService: HtmlService) {
   
   }

  ngOnInit(): void {
    this.label = this.HtmlService.getlabel();
    console.log(this.label);
  }

}
