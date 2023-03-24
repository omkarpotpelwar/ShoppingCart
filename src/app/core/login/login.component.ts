import { Component } from '@angular/core';
import { LoginService } from 'src/app/shared/service/login.service';
import { ErrorResponse, ErrorMessage } from 'src/app/shared/models/core.models'
import { User } from 'src/app/shared/models/core.models';
import { SharedService } from 'src/app/shared/service/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login = {
    'userId': '',
    'password': ''
  }
  failed!: string
  constructor(
    private loginService: LoginService,
    private sharedService: SharedService,
    private router: Router
  ) {

  }

  doSubmit(event: any): void {
    console.log(this.login)
    this.loginService.login("ad", "asd")
      .subscribe({
        error: (error: ErrorResponse) => {
          this.failed = error.error.message
        },
        next: (res) => {
          let loggedInUser = <User>res;
          console.log(loggedInUser.firstName)
          this.sharedService.User = loggedInUser
          this.router.navigateByUrl('products')
        }
      })
  }

  log(f: any) {
    console.log(f)
  }

}
