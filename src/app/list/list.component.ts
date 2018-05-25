import {Component, OnInit} from '@angular/core';
import {Inventory} from '../model/inventory';
import {Observable, of} from 'rxjs';
import {InventoryService} from '../service/inventory.service';
import {Laboratory} from '../model/laboratory';
import {SessionStorage} from 'ngx-store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  inventoryData$: Observable<Array<Inventory>> = of([]);
  @SessionStorage({key: 'lab'}) lab: Laboratory;

  constructor(private service: InventoryService) {
  }

  ngOnInit() {
    this.selectLab();
  }

  selectLab() {
    this.inventoryData$ = this.service.getAllInventories(this.lab.name);
    this.inventoryData$.subscribe(value => console.log(value));
  }
}
