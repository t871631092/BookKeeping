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
    this.begin();
  }

  public getType() {
    return this.typeDate;
  }
/**
 * 获取支出类型
 */
  public getOutType(callback) {
    this.storage.get('outType').then(
      (data) => {
        callback(data);
      },
      error => console.error(error)
  );
  }
/**
 * 获取收入类型
 */
public getInType(callback) {
  this.storage.get('inType').then(
    (data) => {
      callback(data);
    },
    error => console.error(error)
);
}
/**
 * 初始化数据库
 */
  private begin() {
    this.storage.get('outType').then(
      (data) => {
        if (!data) {
          this.storage.set('outType',
          [
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
          ]);
        }
      },
      error => console.error(error)
    );
    this.storage.get('inType').then(
      (data) => {
        if (!data) {
          this.storage.set('inType',
          [
            {
              title: '工资',
              name: 'card'
            }
          ]);
        }
      },
      error => console.error(error)
    );
  }

}
