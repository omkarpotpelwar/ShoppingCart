import { Component, OnInit } from '@angular/core';
import { Response, Product } from 'src/app/shared/models/shared.models';
import { ProductService } from 'src/app/shared/service/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  responseProduct!: Response;
  products!: Product[]
  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      this.responseProduct = <Response>res
      this.products = this.responseProduct.products
      console.log(this.products)
    })
  }

}
