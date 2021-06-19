import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user-service.service';
import { Router, ActivatedRoute, ParamMap, ActivationStart, NavigationEnd, ActivationEnd } from '@angular/router';
import { PageNotFoundComponent } from './permit-all-components/page-not-found/page-not-found.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'affiliator-cl';
  hideShell: boolean = false;
  noShellComponents: string[] = ["PageNotFoundComponent", "LoginComponent", "FirstTimeLoginComponent"];

	constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
	}

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      // see also 
      if(val instanceof ActivationEnd && (val.snapshot.component as Function)) {
        const currentComponentName: string = (val.snapshot.component as Function).name;
        if(this.noShellComponents.includes(currentComponentName)) {
          this.hideShell = true;
        } else {
          this.hideShell = false;
        }
      }
  });
  }


}
