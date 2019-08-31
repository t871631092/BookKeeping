import { Component } from '@angular/core';
import { CommonService } from '../service/common.service';
import { CountLog } from '../model/count-log';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public countType = 'out';
  public inputMoney = '';
  public isInput = true;
  public countTypeData: any;
  public date = new Date();
  public selectType: number;
  constructor(
    private common: CommonService,
  ) {
    this.countTypeData = this.getType();
    this.selectType = 0;
  }


  public numberInput(item: string) {
    console.log('btn click', item);
    console.log('小数', /[0-9]*$/g.exec(this.inputMoney)[0].length);
    if (this.inputMoney.length >= 15) {
      return;
    }
    if (this.inputMoney.trim().length === 1 && this.inputMoney.indexOf('0') === 0) {
      this.inputMoney = '';
    }
    if (this.inputMoney.indexOf('.') === -1) {
      this.inputMoney = this.inputMoney + item;
    } else {
      if (/[0-9]*$/g.exec(this.inputMoney)[0].length < 2) {
        this.inputMoney = this.inputMoney + item;
      }
    }
  }
  public zeroInput() {
    if (this.inputMoney.indexOf('0') === 0) {
      return;
    } else {
      if (this.inputMoney.indexOf('.') === -1) {
        this.inputMoney = this.inputMoney + '0';
      } else {
        if (/[0-9]*$/g.exec(this.inputMoney)[0].length < 2) {
          this.inputMoney = this.inputMoney + '0';
        }
      }
    }
  }

  /**
   * floatInput
   */
  public floatInput(item: string) {
    console.log(this.inputMoney.indexOf('.'));
    if (this.inputMoney.indexOf('.') === -1) {
      if (this.inputMoney.trim().length === 0) {
        this.inputMoney = '0';
      }
      this.inputMoney = this.inputMoney + item;
    } else {
      // 错误 alert
    }
  }

  /**
   * confirmClick
   */
  public confirmClick() {
    if (this.inputMoney.indexOf('.') === this.inputMoney.length - 1 ) {
      this.inputMoney = this.inputMoney.slice(0, -1);
    }
    console.log(this.inputMoney.toString());
    console.log(this.countType);
    console.log(this.selectType);

  }

  /**
   * backSpace
   */
  public backSpace() {
    this.inputMoney = this.inputMoney.slice(0, -1);
  }

  /**
   * add mode
   */
  public addMode() {

  }

  /**
   * 增加类型
   */
  public addType(e) {
    console.log(this.selectType);
  }

  // 获取记账类型
  private getType() {
    if (this.countType === 'in') {
      this.common.getInType((data) => {this.countTypeData = data; });
    } else if (this.countType === 'out') {
      this.common.getOutType((data) => {this.countTypeData = data; });
    }
  }

}
