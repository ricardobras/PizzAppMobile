import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsBeerPage } from './details-beer';

@NgModule({
  declarations: [
    DetailsBeerPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsBeerPage),
  ],
})
export class DetailsBeerPageModule {}
