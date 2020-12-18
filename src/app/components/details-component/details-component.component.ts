import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.css']
})
export class DetailsComponentComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  navigateBack(){
    this._router.navigate(['']);
  }

}
