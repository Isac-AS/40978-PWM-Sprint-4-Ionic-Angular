import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderWithArrowComponent } from './header-with-arrow/header-with-arrow.component';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from '../pages/login/login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderWithArrowComponent,
    MenuComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    HeaderWithArrowComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    [RouterModule.forChild(routes)]
  ],
})
export class ComponentsModule { }
