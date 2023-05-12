import { Component } from '@angular/core';
import { ApiGestionService } from 'src/app/api-gestion.service';
import { Product } from 'src/app/modules/product/product.module';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent {
constructor(private  serv:ApiGestionService){};
x:any;
y:any;
title: string="";
price: number=0;
description: string="";
image: string="";
category: string="";
ngOnInit(){
  this.serv.getallproducts().subscribe((data:any)=>{this.x=data;});
  this.serv.getcategory().subscribe((data:any)=>{this.y=data;});
          }
delete(p:any){
  this.serv.deleteprod(p).subscribe((data:any)=>{console.log(data)});
              }
addproduct(){
  const pro=new Product(this.title,this.price,this.description,this.image,this.category);
  this.serv.addproduct(pro).subscribe((data:any)=>{console.log(data)});
}
}
