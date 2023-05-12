import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './modules/product/product.module';

@Injectable({
  providedIn: 'root'
})
export class ApiGestionService {


  constructor(private http:HttpClient) { }
  getallproducts():any{
    return this.http.get("https://fakestoreapi.com/products");
  }
  getprod(x:any):any{
    return this.http.get("https://fakestoreapi.com/products/"+x);
  }
  addproduct(product:Product):any{
    return this.http.post("https://fakestoreapi.com/products",product);
  }
  getcategory():any{
    return this.http.get("https://fakestoreapi.com/products/categories");
  }
  deleteprod(x:any):any{
    return this.http.delete("https://fakestoreapi.com/products/"+x);
  }
}
