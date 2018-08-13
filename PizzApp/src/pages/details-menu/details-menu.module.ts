import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsMenuPage } from './details-menu';

@NgModule({
  declarations: [
    DetailsMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsMenuPage),
  ],
})
export class DetailsMenuPageModule {}
