import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { OptionsMenuTabPage } from '../options-menu-tab/options-menu-tab';
import { OptionsBeerTabPage } from '../options-beer-tab/options-beer-tab';
import { OptionsCartTabPage } from '../options-cart-tab/options-cart-tab';

/**
 * Generated class for the ListOptionsMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-options-menu',
  templateUrl: 'list-options-menu.html',
})
export class ListOptionsMenuPage {

  tab1Root = OptionsMenuTabPage;
  tab2Root = OptionsBeerTabPage;
  tab3Root = OptionsCartTabPage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListOptionsMenuPage');
  }


}
