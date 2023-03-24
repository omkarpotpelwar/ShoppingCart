import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http'
import { ProductComponent } from './product.component';
import { ProductService } from 'src/app/shared/service/product.service'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule  } from "@angular/common/http";
import { Observable, of} from 'rxjs';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let productService: ProductService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ProductComponent ],
      providers: [ProductService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should load products', ()=> {
    let service = TestBed.get(ProductService);
   //fixture.debugElement.injector.get(ProductService);
   spyOn(service,'getProducts').and.returnValue(of([1]))
   fixture.detectChanges()
    console.log('component.products', component.products)
  })

});
