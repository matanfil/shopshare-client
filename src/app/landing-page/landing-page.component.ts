import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  showPage: boolean = false;
  welcomeMsg: string = '';

  constructor(private userService: UserService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    await this.userService.getUserDetails();
    if(this.userService.isFtl()) {
      this.router.navigateByUrl('ftl');
    }
    this.showPage = true;
    this.welcomeMsg = `Hello ${this.userService.$user.name}, you have a ${this.userService.$user.roles} role`;
  }

}
