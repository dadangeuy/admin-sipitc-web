import {Component, OnInit} from '@angular/core';
import {Inventory} from '../model/inventory';
import {Observable} from 'rxjs';
import {InventoryService} from '../service/inventory.service';
import {Laboratory} from '../model/laboratory';
import {SessionStorage} from 'ngx-store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @SessionStorage({key: 'lab'}) lab: Laboratory;
  inventoryData$: Observable<Array<Inventory>> = this.service.getAllInventories(this.lab.name);

  constructor(private service: InventoryService) {
  }

  ngOnInit() {
  }

  deleteInventory(id) {
    this.service.deleteInventory(id).subscribe(() => {
      alert('Berhasil Dihapus');
      this.inventoryData$ = this.service.getAllInventories(this.lab.name);
    });
  }
}
