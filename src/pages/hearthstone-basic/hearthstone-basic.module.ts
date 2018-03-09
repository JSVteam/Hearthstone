import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HearthstoneBasicPage } from './hearthstone-basic';

@NgModule({
  declarations: [
    HearthstoneBasicPage,
  ],
  imports: [
    IonicPageModule.forChild(HearthstoneBasicPage),
  ],
})
export class HearthstoneBasicPageModule {}
