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
  flag:boolean = true;

  constructor(private githubService:GithubService){
    
  }

  ngOnInit(): void {
    //   Promise.all([this.getUsers(), this.getRepos()]).then((values) => {
    //   console.log(values);
    // });

    this.getUsers();
  }
  flagChangedHandler(flag: boolean) {
    this.flag = flag;
  }
  getUsers(){
    this.githubService.getUsers().subscribe((data)=>{
  
      this.users = data
      this.getRepos()
    })
  }
  getRepos(){
    this.users.map((val)=>{
      console.log(val.login)
      this.githubService.getRepos(val.login).subscribe((data)=>{
        if(data.name != null){

          console.log(data);
    

          let name = data.name.split(' ');
          let FirstName = name[0];
          let LastName = name[name.length-1] 
          let numOfRepos = data.public_repos;
          let avatar_url = val.avatar_url;
          let id = data.id;
          let login = data.login;
          console.log(FirstName+ '-' + LastName+'  -'+numOfRepos+' -'+avatar_url+"id"+id);
          console.log(numOfRepos);

          this.customRepos.push(new Repos(FirstName, LastName, numOfRepos, avatar_url, id, login))
          // console.log("==========================="+this.customRepos.length)
        }
        else
          console.log(data.name)
      })
    })
  }
}
