import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-firt-time-login',
  templateUrl: './firt-time-login.component.html',
  styleUrls: ['./firt-time-login.component.scss']
})
export class FirstTimeLoginComponent implements OnInit {
  ftlForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.ftlForm = this.fb.group({
      role: new FormControl('ROLE_BUSINESS')
    })

    this.ftlForm.valueChanges.subscribe(change => 
      console.log(change));

   }

  ngOnInit(): void {
  }

  submit() {
    this.userService.doFirstTimeLogin(this.ftlForm.value);
  }

}
