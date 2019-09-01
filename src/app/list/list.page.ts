import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import { CountLog } from '../model/count-log';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<CountLog> = [];
  constructor(
    private common: CommonService
  ) {
  }

  ngOnInit() {
    this.getList();
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
  private getList() {
    this.common.getLog((data) => {
      this.items = data;
    });
  }
}
