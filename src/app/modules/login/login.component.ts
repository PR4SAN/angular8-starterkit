import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/core/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form: FormGroup;
    isPasswordHidden = true;
    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private ls: LocalstorageService
    ) {
      if (this.ls.getLocalStorage('isLoggedin')) {
        this.router.navigate(['']);
      }
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            user_name: ['', Validators.required],
            password: ['', Validators.required],
        });

    }


    onLogin(e) {
        e.preventDefault();
        // this.loaderService.show();
        this.ls.setLocalStorage('isLoggedin', JSON.stringify(this.form.value));
        this.router.navigate(['']);
    }

}
