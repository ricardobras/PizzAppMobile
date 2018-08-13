import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  public urlServer = "http://10.30.10.14:8000";
  apiUrl = this.urlServer+'/api';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getData(moduleName) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+moduleName)
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public getUrlServer(){
    return this.urlServer;
  }

  addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/users', JSON.stringify(data))
      .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
