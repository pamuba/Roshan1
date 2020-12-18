import { Component, OnInit, Input } from '@angular/core';
import { Repos } from 'src/app/models/repos';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input() users:Users[]
  @Input() customRepos:Repos[]
  p:number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
