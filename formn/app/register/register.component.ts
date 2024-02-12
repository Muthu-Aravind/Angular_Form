import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor(){}

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    firstName : new FormControl(""),
    lastName : new FormControl(""),
    email : new FormControl(""),
    mobile : new FormControl(""),
    gender : new FormControl(""),
    pwd : new FormControl(""),
    rpwd : new FormControl("")
  });



  registerSubmitted(){
    console.log(this.registerForm.value);
  }
}
