import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  registerForm: FormGroup;
  

  constructor(private a:Router,private fb:FormBuilder,private http:ServiceService,private hp:HttpClient) {
    this.registerForm = this.fb.group({
      moviename: new FormControl(),
      movielang: new FormControl(),
      gener: new FormControl(),
    })
   }

  ngOnInit() {
  }
  check12(val) {
    this.http.loginuser1(val).subscribe(data=>{
     // console.log(data)
    })
    this.a.navigateByUrl("moviepath")
}

}
