import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HsKoboldsPage } from './hs-kobolds';

@NgModule({
  declarations: [
    HsKoboldsPage,
  ],
  imports: [
    IonicPageModule.forChild(HsKoboldsPage),
  ],
})
export class HsKoboldsPageModule {}
