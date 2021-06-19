import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, from } from 'rxjs';
import { UserService } from '../services/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class FtlGuardGuard implements CanActivate {

	constructor(private router: Router, private userService: UserService) {
	}
 

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return new Promise<boolean>(resolve => {
      this.userService.isFtl().then(result => {
        if(result) {
          resolve(true);
        } else {
          this.router.navigateByUrl('/')
          resolve(false);
        }
      })
    })
    
  }
  
}
