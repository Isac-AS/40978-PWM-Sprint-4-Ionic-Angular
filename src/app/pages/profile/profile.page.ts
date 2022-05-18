import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/interfaces';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { DatabaseService } from 'src/app/services/database.service';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { InteractionService } from 'src/app/services/interaction.service';
import { Subscription } from 'rxjs';
import { FireStorageService } from 'src/app/services/fire-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public errorMessage: string;
  public currentUserData = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(2)]],
    surname: ['', [Validators.required, Validators.minLength(2)]],
    bio: ['']
  });

  public userData: User;
  private userDataSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private db: DatabaseService,
    private data: DataService,
    private interaction: InteractionService,
    private storageService: FireStorageService
  ) { 
    this.userData = this.data.getCleanUser();
  }

  ngOnInit() { }

  ionViewWillEnter() {
    this.auth.getUid().then(currentUserId => {
      this.userDataSubscription = this.db.readDocument<User>('users', currentUserId).subscribe(userData => {
        this.userData = userData;
      })
    })
  }

  async updateUserData() {
    this.interaction.presentLoading('Modificando datos...');
    this.fillUserInfo();
    await this.db.updateDocument<User>(this.userData, 'users', this.userData.id);
    this.interaction.dismissLoading();
    this.interaction.presentToast('¡Datos de usuarios modificados con éxito!')
  }

  fillUserInfo() {
    this.userData.name = this.currentUserData.value.username;
    this.userData.surname = this.currentUserData.value.surname;
    this.userData.bio = this.currentUserData.value.bio;
  }

  uploadProfilePicture(imageInput: any) {
    this.storageService.uploadFile(imageInput, 'profilePictures', this.userData.id);
    const ref = this.storageService.getRef('profilePictures/' + this.userData.id);
    ref.getDownloadURL().subscribe( async url => {
      this.userData.photoURL = await url;
      this.db.updateDocument<User>(this.userData, 'users', this.userData.id)
    })
  }

  ionViewWillLeave() {
    this.currentUserData.reset();
    this.userDataSubscription.unsubscribe();
  }

}
