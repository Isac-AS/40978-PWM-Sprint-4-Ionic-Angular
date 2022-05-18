import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public isLoggedIn: boolean;

  private userStateObserver: Observable<any>;
  private userStateSubscription: Subscription;

  constructor(
    private auth: AuthService,
    private router: Router,
    private interaction: InteractionService
  ) { }

  ngOnInit() { 
    this.userStateObserver = this.auth.userState();
    this.userStateSubscription = this.userStateObserver.subscribe( res => {
      this.isLoggedIn = !!res;
    })
  }

  async logOut() {
    const res = await this.auth.logout().catch(error => {
      alert('Parece haber habido un problema. Inténtelo de nuevo.')
    });
    this.interaction.presentToast('Sesión cerrada con éxito')
    this.router.navigate(['/home']);
  }

  ionViewDidLeave() {
    this.userStateSubscription.unsubscribe();
  }

}
