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
    model: any = {};
    constructor(private router:Router , private auth: AppAuthService) {  }

    loginUser(e) {
        e.preventDefault();
        var email = this.model.email;
        var password = this.model.password;
        console.log(this.model.email);
        console.log(this.model.password);
        const user = new User();

        user.email = email;
        user.password = password;
        this.auth.login(user);

  /*       if (username == 'admin' && password == 'admin') {
            this.router.navigate(['home']);
        } */
    }

}