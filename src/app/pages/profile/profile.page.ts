import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/interfaces';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { DatabaseService } from 'src/app/services/database.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public errorMessage: string;
  public newUserData = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.minLength(2)]],
    surname: ['', [Validators.required, Validators.minLength(2)]]
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

  ngOnInit() {
  }

  async updateUserData() {
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
      this.data.fetchCurrentUserData();
    }
  }

  fillUserInfo() {
    this.userData.name = this.newUserData.value.username;
    this.userData.surname = this.newUserData.value.surname;
    this.userData.email = this.newUserData.value.email;
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
    return this.newUserData.controls['password'];
  }

  get confirm_password(): AbstractControl {
    return this.newUserData.controls['alt_password'];
  }

  onPasswordChange(){
    if (this.confirm_password.value === this.password.value) {
      this.confirm_password.setErrors(null);
    } else {
      this.confirm_password.setErrors({ mismatch: true });
    }
  }

  ionViewWillLeave() {
    this.newUserData.reset();
  }


}
