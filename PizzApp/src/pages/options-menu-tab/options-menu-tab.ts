import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { LoadingController } from 'ionic-angular';
import { DetailsMenuPage } from '../details-menu/details-menu';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-options-menu-tab',
  templateUrl: 'options-menu-tab.html',
})
export class OptionsMenuTabPage {
  menus : any;
  descending: boolean = true;
  order: number;
  column: any = 'rate';


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public restProvider: RestProvider, public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,private alertCtrl: AlertController) {

   this.presentLoading();
    this.getMenus();
    this.sort();
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }
  presentConfirm(menu) {
    let alert = this.alertCtrl.create({
      title: 'Informação',
      message: 'Aqui você poderá modificar e ver os ingredientes ou somente adicionar este item ao seu pedido! aproveite!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },

        {
          text: 'Adic.Pedido',
          handler: () => {
          this.presentModal(menu);
          }
        }
      ]
    });
    alert.present();
  }

 presentModal(itemMenu) {
    let modal=this.modalCtrl.create(DetailsMenuPage,itemMenu);
    modal.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad OptionsMenuTabPage');
    this.presentLoading();
     this.getMenus();
     this.sort();
  }
   presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Carregando...",
      duration: 3000
    });
    loader.present();
  }

  doRefresh(refresher) {
  console.log('Begin async operation', refresher);

  setTimeout(() => {
    console.log('Async operation has ended');
    this.getMenus();
    refresher.complete();

  }, 2000);
}

    getMenus(){
      this.restProvider.getData('/menus')
      .then(data=>{
          this.menus = data;
          console.log(this.menus);
        }
      );
    }

}