import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/interfaces';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public errorMessage: string;
  public registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.minLength(2)]],
    surname: ['', [Validators.required, Validators.minLength(2)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    alt_password: ['', [Validators.required]]
  });

  private userData: User;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService,
    private db: DatabaseService,
    private data: DataService,
    private interaction: InteractionService
  ) {
    this.userData = this.data.getCleanUser();
  }

  ngOnInit() { }

  async register() {
    this.interaction.presentLoading('Registrando usuario...')
    this.fillUserInfo();
    const res = await this.auth.register(this.userData).catch(error => {
      this.generateErrorMessage(error)
    });

    if (res) {
      this.userData.id = res!.user!.uid;
      this.userData.password = 'null';
      await this.db.createDocument(this.userData, 'users', this.userData.id);
      this.interaction.dismissLoading();
      this.interaction.presentToast('¡Usuario registrado con éxito!')
      await this.router.navigate(['/home']);
    }
  }

  fillUserInfo() {
    this.userData.name = this.registerForm.value.username;
    this.userData.surname = this.registerForm.value.surname;
    this.userData.email = this.registerForm.value.email;
    this.userData.password = this.registerForm.value.password;
    this.userData.photoURL = "https://firebasestorage.googleapis.com/v0/b/pwm-sprint3-angular.appspot.com/o/user-pic.jpg?alt=media&token=4e4c6102-6a80-449c-ad77-e8d34b70a777"
  }

  generateErrorMessage(error: any) {
    switch (error.code) {
      case "auth/email-already-in-use":
        this.errorMessage = "Error: El email introducido ya está en uso";
        break;
      case "auth/internal-error":
        this.errorMessage = "Error del sistema. Inténtelo de nuevo";
        break;
      default:
        this.errorMessage = "Error desconocido. Inténtelo de nuevo";
    }
  }

  get password(): AbstractControl {
    return this.registerForm.controls['password'];
  }

  get confirm_password(): AbstractControl {
    return this.registerForm.controls['alt_password'];
  }

  onPasswordChange(){
    if (this.confirm_password.value === this.password.value) {
      this.confirm_password.setErrors(null);
    } else {
      this.confirm_password.setErrors({ mismatch: true });
    }
  }

  ionViewWillLeave() {
    this.registerForm.reset();
  }
}
