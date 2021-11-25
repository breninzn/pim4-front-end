import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';

import { CardQuartoComponent } from './card-quarto.component';


@NgModule({
  declarations: [CardQuartoComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule
  ],
  exports: [
    CardQuartoComponent
  ]
})
export class CardQuartoModule { }
