import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.sass']
})
export class BrandsComponent implements OnInit {

  // brands: string[] = ['all', 'Lenovo', 'Dell', 'Dell', 'Lg', 'Samsung'];
  brands: string[] = ['all', 'Brand-1', 'Brand-2', 'Brand-3', 'Brand-4', 'Brand-5'];

  @Output() brandChanged = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


  brendSelect(event) {
  this.brandChanged.emit(
    event.value
  );
  }

}
