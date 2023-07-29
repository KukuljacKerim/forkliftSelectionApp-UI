import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BrandService } from '../shared/brandService';

@Component({
  selector: 'app-brand-overview',
  templateUrl: './brand-overview.component.html',
  styleUrls: ['./brand-overview.component.css']
})
export class BrandOverviewComponent implements OnInit {
  brands: any;
  constructor(private service: BrandService) {
  }
  ngOnInit() {
    this.service.getBrands().subscribe((data) => {
      this.brands = data;
      console.log(data);
    });
  }

}
