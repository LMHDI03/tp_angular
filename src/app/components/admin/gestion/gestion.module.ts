import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GestionRoutingModule } from './gestion-routing.module';
import { GestionComponent } from './gestion.component';
import { ApiGestionService } from 'src/app/api-gestion.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    GestionComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    GestionRoutingModule,
    FormsModule

  ],
  providers: [ApiGestionService],
})
export class GestionModule { }
