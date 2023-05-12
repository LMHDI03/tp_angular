import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiGestionService } from 'src/app/api-gestion.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
constructor(private api:ApiGestionService,private http:HttpClient){}

x:any;
  ngOnInit(){
   this.api.getallproducts().subscribe((data:any)=>{
    this.x=data ;
  } );


  }
}
