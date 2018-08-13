import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { LoginPage } from "../pages/login/login";


import { ListOptionsMenuPage } from '../pages/list-options-menu/list-options-menu';
import { OptionsMenuTabPage } from '../pages/options-menu-tab/options-menu-tab';
import { OptionsBeerTabPage } from '../pages/options-beer-tab/options-beer-tab';
import { OptionsCartTabPage } from '../pages/options-cart-tab/options-cart-tab';
import { DetailsMenuPage } from '../pages/details-menu/details-menu';
import { DetailsBeerPage } from '../pages/details-beer/details-beer';

import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';

import { HttpClientModule } from '@angular/common/http';
import { BrMaskerModule } from 'brmasker-ionic-3';


import { RestProvider } from '../providers/rest/rest';


@NgModule({
  declarations: [
    MyApp,
    SearchPipe,
    SortPipe,
    LoginPage,
    ListOptionsMenuPage,
    OptionsMenuTabPage,
    OptionsBeerTabPage,
    OptionsCartTabPage,

    DetailsMenuPage,
    DetailsBeerPage,

  ],
  imports: [
    BrowserModule,
    BrMaskerModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    LoginPage,

    ListOptionsMenuPage,
    OptionsMenuTabPage,
    OptionsBeerTabPage,
    OptionsCartTabPage,
    DetailsMenuPage,
    DetailsBeerPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
