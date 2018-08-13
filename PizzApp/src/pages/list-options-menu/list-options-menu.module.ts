import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListOptionsMenuPage } from './list-options-menu';
 



@NgModule({
  declarations: [
    ListOptionsMenuPage,

  ],
  imports: [
    IonicPageModule.forChild(ListOptionsMenuPage),
  ],
  exports:[

  ]
})
export class ListOptionsMenuPageModule {}
