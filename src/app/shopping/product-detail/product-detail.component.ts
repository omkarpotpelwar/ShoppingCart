import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe(param => {
      console.log(param.get('id'))
    })
  }
}
