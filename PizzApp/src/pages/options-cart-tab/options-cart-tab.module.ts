import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OptionsCartTabPage } from './options-cart-tab';

@NgModule({
  declarations: [
    OptionsCartTabPage,
  ],
  imports: [
    IonicPageModule.forChild(OptionsCartTabPage),
  ],
})
export class OptionsCartTabPageModule {}
