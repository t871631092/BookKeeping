import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public typeDate = [
    {
      title: '食物',
      name: 'restaurant'
    }, {
      title: '交通',
      name: 'car'
    }, {
      title: '购物',
      name: 'cart'
    }
  ];
  constructor(
    private storage: Storage
  ) {
    
  }

  public getType() {
    return this.typeDate;
  }



}
