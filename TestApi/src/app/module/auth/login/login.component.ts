import { AppAuthService } from '../auth.service';
import { AuthModule } from '../auth.module';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { User } from '../../../domain/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    constructor(private router:Router , private auth: AppAuthService) {  }

    loginUser(e) {
        e.preventDefault();
        var username = e.target.elements[0].value;
        var password = e.target.elements[1].value;

        const user = new User();
        user.id = Number(e.target.elements[0].value);
        user.password = e.target.elements[1].value;
        this.auth.login(user);

  /*       if (username == 'admin' && password == 'admin') {
            this.router.navigate(['home']);
        } */
    }

}