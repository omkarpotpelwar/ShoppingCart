import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { Response, Product } from 'src/app/shared/models/shared.models';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) {

    }

    getProducts() {
       return this.http.get('https://dummyjson.com/products');
    }
}