import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './shopping/product/product.component'
import { HttpClientModule  } from "@angular/common/http";
import { ProductService } from './shared/service/product.service';
import { LoginService } from './shared/service/login.service';
import { RouterModule } from '@angular/router';
import { SharedService } from './shared/service/shared.service'
import { AuthService } from './shared/guard/auth.service';
import { ProductDetailComponent } from './shopping/product-detail/product-detail.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent,
    ProductDetailComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductComponent, canActivate: [AuthService]},
      {path:"", component: LoginComponent},
      {path: 'products/:id', component: ProductDetailComponent }
    ])
  ],
  providers: [ProductService, LoginService, SharedService, AuthService],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
