import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OptionsBeerTabPage } from './options-beer-tab';

@NgModule({
  declarations: [
    OptionsBeerTabPage,
  ],
  imports: [
    IonicPageModule.forChild(OptionsBeerTabPage),
  ],
})
export class OptionsBeerTabPageModule {}
