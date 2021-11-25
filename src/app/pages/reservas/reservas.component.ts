import { ReservaDTO } from './../../model/models';
import { ReservaFormComponent } from './reserva-form/reserva-form.component';
import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';
import { finalize } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {

  reservas: ReservaDTO[];
  loading = true;
  constructor(private pgService: PagesService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getReservas();
  }

  novaReserva(): void {
    this.dialog.open(ReservaFormComponent, {width: '100%', disableClose: true}).afterClosed().subscribe((data: ReservaDTO) => {
      if (data) {
        data.dataEntrada = moment(data.dataEntrada).format("YYYY-MM-DD");
        data.dataSaida = moment(data.dataSaida).format("YYYY-MM-DD");
        this.pgService.inserirReserva(data).pipe(finalize(() => {
          this.getReservas();
        })).subscribe();
      }
    });
  }

  getReservas() {
    this.pgService.getReservas().pipe(finalize(() => {
      this.loading = false;
    })).subscribe(data => {
      this.reservas = data.content;
    });
  }
}
