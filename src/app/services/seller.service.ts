import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login, SignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private _http: HttpClient, private router: Router) {}
  userSignUp(data: SignUp) {
    // yahan v milana hai
    this._http
      .post('http://localhost:3000/seller', data, { observe: 'response' })
      .subscribe((result) => {
        this.isSellerLoggedIn.next(true);
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
      });
  }
  reloadSeller() {}
  // milana hai last me 1 45
  userLogin(data: login) {
    console.log(data);
    this._http
      .get(
        `http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
        { observe: 'response' }
      )
      .subscribe((result: any) => {
        console.log(result);
        if (result && result.body && result.body.length) {
          console.log('user logged in');
          localStorage.setItem('seller', JSON.stringify(result.body));
          this.router.navigate(['seller-home']);
        } else {
          console.log('login failed');
        } //yahan pr krna hai 12 12
      });
  }
}
