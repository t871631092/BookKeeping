import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  constructor(
    private storage: Storage
  ) {
    this.begin();
  }


  /**
   * addLog
   */
  public addLog(logData: any) {
    const logDateJson = JSON.stringify([logData]);
    this.storage.get('countLog').then(
      data => {
        console.log(data);
        if (!data) {
          this.storage.set('countLog', logDateJson);
        } else {
          const arr = JSON.parse(data);
          arr.push(logData);
          this.storage.set('countLog', JSON.stringify(arr));
        }
      },
      err => console.error(err)
    );
  }
  /**
   * getLog
   */
  public getLog(callback) {
    this.storage.get('countLog').then(
      data => {
        callback(JSON.parse(data));
      }, err => console.error(err),
    );
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
