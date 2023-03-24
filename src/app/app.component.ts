import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/service/shared.service';
import { User } from "./shared/models/core.models";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ShoppingCart';
  welcomeUser!:string
  isLoggedIn:boolean = false
  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit() {
    this.sharedService.loggedInUser.subscribe((user: User) =>{
      this.isLoggedIn = true
      this.welcomeUser = user.firstName
    })
  }

  logout(): void {
    let usr: User = { } as User
    this.sharedService.User = usr
    this.isLoggedIn = false
    this.router.navigateByUrl("");
  }
}
