import { MatButtonModule } from '@angular/material/button';
import { CardQuartoModule } from './../../componentes/card-quarto/card-quarto.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuartosRoutingModule } from './quartos-routing.module';
import { QuartosComponent } from './quartos.component';
import { QuartoFormModule } from './quarto-form/quarto-form.module';


@NgModule({
  declarations: [QuartosComponent],
  imports: [
    CommonModule,
    QuartosRoutingModule,
    CardQuartoModule,
    QuartoFormModule,
    MatButtonModule
  ]
})
export class QuartosModule { }
