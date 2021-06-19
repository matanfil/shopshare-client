import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from './models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User = new User();

  constructor(private http: HttpClient, private router: Router) {}

  doLogin(authCode: string): void {
    this.http.post('/api/login', {authCode: authCode}, {withCredentials: true}).subscribe(() => {
      console.log('successful login');
      this.router.navigateByUrl('/');
    }, err => {
      //todo: show error modal, login failed please try again
      console.error('login failed');
      this.router.navigateByUrl('unauthorized');
    })
  }

  logout() {
    let httpParams = new HttpParams().set('username', 'matan2');
    this.http.get('/api/logout', {params: httpParams}).subscribe(res => console.log('logout successful'), err => console.error('logout failed' + err));
  }

  goToCognitoLogin() {
    window.location.href = environment.cognitoLoginURl;
  }

  isAuthenticated() {
    return document.cookie.split('=').includes('authenticated');
  }

  async getUserDetails() {
    this.user = await this.http.get<User>('/api/user', {withCredentials: true}).toPromise<User>();
  }

  getSecured() {
    this.http.get('/api/secured', {withCredentials: true, responseType: 'text'}).subscribe(msg => console.log(msg));
  }

  async isFtl(): Promise<boolean> {
    if(this.isAuthenticated() && !this.user.name) {
      await this.getUserDetails();
    }
    return this.user.roles.length === 0;
  }

  doFirstTimeLogin(profile: {role: string}) {
    this.http.post('/api/ftl', profile, {withCredentials: true}).subscribe(res => {
      console.log('FTL success');
      this.router.navigateByUrl('login');
    }, err => {
      console.error('FTL error');
    })
  }


  /**
   * Getter $user
   * @return {User }
   */
    public get $user(): User  {
    return this.user;
  }

    /**
     * Setter $user
     * @param {User } value
     */
  public set $user(value: User ) {
    this.user = value;
  }
  
}
