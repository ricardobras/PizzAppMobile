import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the DetailsBeerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details-beer',
  templateUrl: 'details-beer.html',
})
export class DetailsBeerPage {
  menu;
  items;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,
              public restProvider : RestProvider, private alertCtrl: AlertController) {

      this.menu = this.navParams.get('itemMenu');
      this.items=
            [
              {
                     "id":"1",
                      "name":"Coca Cola - 1 lt",
                      "price":"07,00"
                    },
                    {
                     "id":"2",
                      "name":"Coca Cola - 2 lt",
                      "price":"07,00"
                          },
                    {
                     "id":"3",
                      "name":"Pepsi Cola - 1 lt",
                      "price":"07,00"
                    },
                    {
                     "id":"4",
                      "name":"Pepsi Cola - 2 lt",
                      "price":"07,00"
                          }
];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsBeerPage');
  }

dismiss(){
  this.viewCtrl.dismiss();
}

check(id){

}
  //confirmar exclusão de item
    dialogRemoveItem(item) {
      let alert = this.alertCtrl.create({
        title: 'Atenção',
        message: '<span text-center>Deseja remover o item <br><b>'+item.name+'</b> ? </span>',
        buttons: [{
              text: 'Sim',
              handler: () => {

              }
            },
          {
            text: 'Não',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }]
        });

      alert.present();
  }
}
