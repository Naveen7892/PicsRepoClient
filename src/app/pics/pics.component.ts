import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PicsService } from '../services/pics.service';

@Component({
  selector: 'app-pics',
  templateUrl: './pics.component.html',
  styleUrls: ['./pics.component.scss']
})
export class PicsComponent implements OnInit {

  picsList = [];
  searchvalue: string = '';
  sortOrder: string = 'd';

  constructor(public dialog: MatDialog, private picService: PicsService) { }

  ngOnInit(): void {
    this.refresh();
  }

  sortDates = [
    { sortType: 'Asc', icon: 'keyboard_arrow_up', value: 'd' },
    { sortType: 'Desc', icon: 'keyboard_arrow_down', value: '-d' }]


  refresh() {
    this.picService.getPics(this.sortOrder, this.searchvalue).subscribe(res => {
      this.picsList = res;
    }, err => {
      console.log(err);
    });
  }

}
