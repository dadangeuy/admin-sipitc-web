import {Component, OnInit} from '@angular/core';
import {InventoryService} from '../service/inventory.service';
import {Inventory} from '../model/inventory';
import {Laboratory} from '../model/laboratory';
import {SessionStorage} from 'ngx-store';

@Component({
  selector: 'app-add-invent',
  templateUrl: './add-invent.component.html',
  styleUrls: ['./add-invent.component.css']
})
export class AddInventComponent implements OnInit {
  @SessionStorage({key: 'lab'}) lab: Laboratory;

  constructor(private service: InventoryService) {
  }

  ngOnInit() {
  }

  createInventory(name: string, spec: string, note: string) {
    const inventory = new Inventory();
    inventory.name = name;
    inventory.spec = spec;
    inventory.note = note;
    inventory.laboratory = this.lab.name;
    this.service.createInventory(inventory).subscribe(() => alert('Inventory Berhasil Ditambahkan'));
  }
}
