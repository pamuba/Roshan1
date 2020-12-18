import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getUsers(){

    //const url = "https://api.github.com/users/mojombo/repos"

    const url = "https://api.github.com/users"
    
    return this.http.get<Users[]>(url)
  }
  getRepos(usr){
    const url = `https://api.github.com/users/${usr}`
    return this.http.get<any>(url)
  }
}
