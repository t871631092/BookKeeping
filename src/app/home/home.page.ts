import { Component } from '@angular/core';
import { CommonService } from '../service/common.service';
import { CountLog } from '../model/count-log';
import { DatePipe } from '@angular/common';

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
  public memo: string;
  constructor(
    private common: CommonService,
    private datePipe: DatePipe
  ) {
    this.getType((data) => this.countTypeData = data );
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
    let data = new CountLog();
    data = {
      value: parseFloat(this.inputMoney),
      type: this.countType,
      icon: this.countTypeData[this.selectType],
      memo: this.memo,
      dateStr: this.datePipe.transform(this.date, 'yyyy-MM-dd'),
      date: this.date
    };
    console.log(this.inputMoney.toString());
    console.log(this.countType);
    console.log(this.selectType);
    console.log(data);
    if (this.inputMoney.length > 0) {
      this.common.addLog(data);
    }
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
  public getType(callback?) {
    if (this.countType === 'in') {
      this.common.getInType((data) => {
        if (callback) {
          callback(data);
        } else {
          this.countTypeData = data;
        }
      });
    } else if (this.countType === 'out') {
      this.common.getOutType((data) => {
        if (callback) {
          callback(data);
        } else {
          this.countTypeData = data;
        }
      });
    }
  }

}
