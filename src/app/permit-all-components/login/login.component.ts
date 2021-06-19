import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    if(!this.userService.isAuthenticated()){
      const authCode: string = this.route.snapshot.queryParams['code'];
      if(authCode) {
        this.userService.doLogin(authCode);
      } else {
        this.userService.goToCognitoLogin();
      }
    } else {
      this.router.navigateByUrl('/');
    }
  }

}
