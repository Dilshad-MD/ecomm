import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { login, SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss'],
})
export class SellerAuthComponent implements OnInit {
  sellerService: any;

  constructor(private seller: SellerService, private router: Router) {}
  showLogin = false;
  ngOnInit(): void {
    this.seller.reloadSeller();
  }
  signUp(data: SignUp): void {
    console.log(data);
    this.seller.userSignUp(data);
  }
  Login(data: SignUp): void {
    // console.log(data);
    this.seller.userLogin(data);
  }
  openLogin() {
    this.showLogin = true;
  }
  openSignUp() {
    this.showLogin = false;
  }
}
