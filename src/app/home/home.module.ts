import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { IConfig, NgxMaskModule } from 'ngx-mask';


import { HomePageRoutingModule } from './home-routing.module';
export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
