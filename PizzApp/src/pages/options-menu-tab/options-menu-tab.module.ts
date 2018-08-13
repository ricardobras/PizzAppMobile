import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OptionsMenuTabPage } from './options-menu-tab';

@NgModule({
  declarations: [
    OptionsMenuTabPage,
  ],
  imports: [
    IonicPageModule.forChild(OptionsMenuTabPage),
  ],
})
export class OptionsMenuTabPageModule {}
