import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListOptionsMenuPage } from '../list-options-menu/list-options-menu';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {

    this.login();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.presentLoading();
  }
  login(){
    (<any>window).AccountKitPlugin.loginWithPhoneNumber({
      useAccessToken:true,
      defaultCountryCode: "BR",
      facebookNotificationsEnabled:true
    },(data)=>{
        (<any>window).AccountKitPlugin.getAccount((info)=>{
          this.navCtrl.push(ListOptionsMenuPage);
      })
      },(err)=>{
      alert(err);
    })
  }

  presentLoading() {
   const loader = this.loadingCtrl.create({
     content: "Carregando...",
     duration: 3000
   });
   loader.present();
 }

}
