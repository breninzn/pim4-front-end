import { ReservaDTO } from '../../model/models';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PagesService } from 'src/app/pages/pages.service';
import { ReservaFormComponent } from 'src/app/pages/reservas/reserva-form/reserva-form.component';
import { MatDialog } from '@angular/material/dialog';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-card-reserva',
  templateUrl: './card-reserva.component.html',
  styleUrls: ['./card-reserva.component.scss']
})
export class CardReservaComponent implements OnInit {

  @Input()
  reserva: ReservaDTO;

  @Output()
  refreshReservas = new EventEmitter();

  constructor(private pgService: PagesService, private dialog: MatDialog) { }

  ngOnInit(): void {}

  removerReserva(): void {
    this.pgService.openDialogConfirm().subscribe(data => {
      if (data) {
        this.pgService.removerReserva(this.reserva.id).pipe(finalize(() => {
          this.refreshReservas.emit();
        })).subscribe();
      }
    });
  }

  editarReserva(): void {
    this.dialog.open(
      ReservaFormComponent, 
      {
        width: '100%', 
        disableClose: true,
        data: this.reserva
      }).afterClosed().subscribe(data => {
        this.pgService.atualizaReserva(data).pipe(finalize(() => {
          this.refreshReservas.emit();
        })).subscribe();
      });
  }
}
