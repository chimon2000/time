import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/security';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  login({email, password}) {
    this.authService.login({ email, password })
      .do(() => this.router.navigate(['/']))
      .subscribe()
  }

  loginWithProvider(provider: string) {
    this.authService.loginWithProvider(provider)
      .do((auth) => console.log('logged in with', provider, auth))
      .do(() => this.router.navigate(['/']))
      .subscribe()
  }

}
