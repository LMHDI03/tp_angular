import { Component } from '@angular/core';
import { ApiGestionService } from 'src/app/api-gestion.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  p:any;
constructor(private api:ApiGestionService,private route: ActivatedRoute){}

ngOnInit(){
  this.api.getprod(this.route.snapshot.paramMap.get('id')).subscribe((data:any)=>{
    this.p=data;
  })
}
}
