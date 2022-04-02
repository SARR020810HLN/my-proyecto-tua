import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HtmlService } from 'src/app/services/html.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {
   label: any;
  constructor(private activatedRoute:ActivatedRoute,
    private htmlService: HtmlService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      //console.log(params['id']);
   this.label = this.htmlService.getlabe(params['id']);
  console.log(this.label);


     });
  }

}
