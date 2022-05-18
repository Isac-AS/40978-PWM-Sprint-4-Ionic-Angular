import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderWithArrowComponent } from './header-with-arrow/header-with-arrow.component';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from '../pages/login/login.page';
import { ProductLoaderComponent } from './product-loader/product-loader.component';
import { ProductComponent } from './product/product.component';

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
    MenuComponent,
    ProductLoaderComponent,
    ProductComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    HeaderWithArrowComponent,
    ProductLoaderComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    [RouterModule.forChild(routes)]
  ],
})
export class ComponentsModule { }
