import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

 hd="5d723709a91f96000641d8f1"
 public User;
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    
    this.http.get('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/favourite_album/'+this.hd).subscribe(data=>{
      console.log("1",data)
      this.User=data['success'].movies
      console.log(this.User)
    })
  }
  add(){
    this.router.navigateByUrl("movie")
  }
}
