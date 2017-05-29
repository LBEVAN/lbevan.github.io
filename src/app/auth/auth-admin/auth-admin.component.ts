import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth-admin',
  templateUrl: './auth-admin.component.html',
  styleUrls: ['./auth-admin.component.css']
})
export class AuthAdminComponent implements OnInit {

  return: string;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => this.return = params['return'] || '/');
  }

  onLogin(form: NgForm) {
    let email = form.value.email;
    let password = form.value.password;

    this.authService.login(email, password)
      .then((user) => {
        this.router.navigate([this.return]);
      })
      .catch((error) => {
        console.log(error);
        form.resetForm(); 
        window.alert("Invalid login details!");
      });
  }
}
