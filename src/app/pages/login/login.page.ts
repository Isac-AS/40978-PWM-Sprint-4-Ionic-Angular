import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public credentials = this.fb.group({
    email : ['', [Validators.required, Validators.email]],
    password : [ '', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService,
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
    const res = await this.auth.login(this.credentials.value.email, this.credentials.value.password)
      .catch( error => {
        
      });
    if (res) {
      await this.router.navigate(['/home']);
    }
  }

  ionViewWillLeave() {
    this.credentials.reset();
  }

}
