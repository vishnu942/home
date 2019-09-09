import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map"
import "rxjs/Rx"
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  baseAPI = 'https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/users'

  baseapi='https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/authenticate'
  
  baseapi1='https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/add_movies'
  
  constructor(private http: HttpClient) { }

  registerUser(values) {
    let body = {
      name: values.name,
      password: values.pass,
      confirmpassword: values.cpass
    }
    return this.http.post(this.baseAPI, body).map(data => { 
      console.log("2",data)
    })
  }

  loginuser(val) {
    let logindata = {
      name: val.name,
      pass: val.pass,
    }
    return this.http.post(this.baseapi, logindata).map(logindata => { 
      console.log("1",logindata)
    })
  }

  loginuser1(val) {
    let moviedata = {
      id:"5d723709a91f96000641d8f1",
      MovieName: val.moviename,
      Language: val.movielang,
      Genre:val.gener
    }
    return this.http.post(this.baseapi1, moviedata).map(logindata => { 
      console.log("1",moviedata,logindata)
    })
  }
  
}
