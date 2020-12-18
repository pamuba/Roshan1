import { Component } from '@angular/core';
import { GithubService } from './services/github.service';
import { Users } from '../app/models/users';
import { Repos } from '../app/models/repos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';

  users:Users[] = [];
  repos:Repos[] = [];
  customRepos:Repos[] = [];

  constructor(private githubService:GithubService){

  }

  getUsers(){
    this.githubService.getUsers().subscribe((data)=>{
      
      this.users = data
      
    })
  }
  getRepos(){
    this.users.map((val)=>{
      console.log(val.login)
      this.githubService.getRepos(val.login).subscribe((data)=>{
        if(data.name != null){

          console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$"+data.avatar_url);

          let name = data.name.split(' ');
          let FirstName = name[0];
          let LastName = name[name.length-1] 
          let numOfRepos = data.public_repos;
          let avatar_url = val.avatar_url;
          console.log(FirstName+ '-' + LastName+'  -'+numOfRepos+' -'+avatar_url);
          console.log(numOfRepos);

          this.customRepos.push(new Repos(FirstName, LastName, numOfRepos, avatar_url))
          // console.log("==========================="+this.customRepos.length)
        }
        else
          console.log(data.name)
      })
    })
  }
}
