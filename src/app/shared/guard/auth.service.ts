import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { SharedService } from 'src/app/shared/service/shared.service';

@Injectable()
export class AuthService implements CanActivate  {
    constructor(private http: HttpClient, private router: Router, private sharedService: SharedService) {

    }


    canActivate(route:any, state: RouterStateSnapshot) {
        debugger;
       if(this.sharedService.User != undefined && this.sharedService.User.firstName != '') return true;
       else
            this.router.navigateByUrl("")
            return false
    }
}