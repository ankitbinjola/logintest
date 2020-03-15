import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;

  constructor(private router:Router) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      emailid: new FormControl("", Validators.compose([
      
      ])),
      // passwd: new FormControl("", this.passwordvalidation);
   });
  }
  update(){
    this.router.navigate(['/machine']);
   }
}
