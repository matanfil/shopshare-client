import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-unauthenticated',
  templateUrl: './unauthenticated.component.html',
  styleUrls: ['./unauthenticated.component.scss']
})
export class UnauthenticatedComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  goToLogin(): void {
    this.userService.goToCognitoLogin();
  }

}
