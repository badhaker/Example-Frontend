import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddUserService } from 'src/app/services/add-user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm! : FormGroup;

  constructor(private fb : FormBuilder, private addUserS : AddUserService) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      userName : [""],
      password : [""]
    })
  }

  addFormData(){
    console.log(this.signupForm);
    this.addUserS.addFormData(this.signupForm.value).subscribe((res:any) => {
      console.log(res);
      
    })
    
  }



}
