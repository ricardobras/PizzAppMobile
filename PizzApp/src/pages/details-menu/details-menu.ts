import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-details-menu',
  templateUrl: 'details-menu.html',
})
export class DetailsMenuPage {
  menu;
  items;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,

  public restProvider : RestProvider, private alertCtrl: AlertController) {
    this.menu = this.navParams.get('itemMenu');
    this.items=
          [    {
                              "id":"1",
                              "name":"Borda de Catupiry"
                            },
                            {
                              "id":"2",
                              "name":"Molho de Tomate"
                            },
                            {
                              "id":"3",
                              "name":"Queijo Mussarela"
                            },
                            {
                              "id":"4",
                              "name":"Presunto"
                            },
                            {
                              "id":"5",
                              "name":"Linguiça Calabresa"
                            },
                            {
                              "id":"6",
                              "name":"Pimenta Calabresa"
                            },
                            {
                              "id":"7",
                              "name":"Orégano"
                        }

                ];
  }


  removeItem(id){
    this.items = this.items.filter( el => el.id !== id );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsMenuPage');
  }

  //Botão voltar
  dismiss(){
  	this.viewCtrl.dismiss();
  }

//confirmar exclusão de item
  dialogRemoveItem(item) {
    let alert = this.alertCtrl.create({
      title: 'Atenção',
      message: '<span text-center>Deseja remover o item <br><b>'+item.name+'</b> ? </span>',
      buttons: [{
            text: 'Sim',
            handler: () => {
              this.removeItem(item.id);
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
