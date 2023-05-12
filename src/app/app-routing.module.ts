import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/home/product/product.component';
import { ProductsComponent } from './components/home/products/products.component';

const routes: Routes = [
  {path:'home' , component:ProductsComponent},
  {path:'product/:id' ,component: ProductComponent},
  {path:'admin',loadChildren:()=>import('./components/admin/gestion/gestion.module').then(m=>m.GestionModule)},
  {path:'',redirectTo:'home',pathMatch:'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
