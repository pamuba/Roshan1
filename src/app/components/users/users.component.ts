import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Repos } from 'src/app/models/repos';
import { Users } from 'src/app/models/users';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input() users:Users[]
  @Input() customRepos:Repos[]
  p:number = 1;
  @Input() flag:boolean
  @Output() flagChanged: EventEmitter<boolean> =   new EventEmitter();

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
  }

  navigateDetails(login){
    this._router.navigate(['/details/'+login])
    this.flag = !this.flag
    this.flagChanged.emit(this.flag);
  }

}
