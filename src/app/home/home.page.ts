import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public inputMoney = '';
  public isInput = true;
  constructor() {

  }


  public numberInput(item: string) {
    console.log('btn click', item);
    console.log('小数', /[0-9]*$/g.exec(this.inputMoney)[0].length);
    if (this.inputMoney.length >= 15) {
      return;
    }
    if (this.inputMoney.indexOf('.') === -1) {
      this.inputMoney = this.inputMoney + item;
    } else {
      if (/[0-9]*$/g.exec(this.inputMoney)[0].length < 2) {
        this.inputMoney = this.inputMoney + item;
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
    console.log(this.inputMoney);

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

}
