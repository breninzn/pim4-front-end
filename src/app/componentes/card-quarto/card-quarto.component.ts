import { QuartoDTO } from '../../model/models';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PagesService } from 'src/app/pages/pages.service';
import { QuartoFormComponent } from 'src/app/pages/quartos/quarto-form/quarto-form.component';
import { MatDialog } from '@angular/material/dialog';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-card-quarto',
  templateUrl: './card-quarto.component.html',
  styleUrls: ['./card-quarto.component.scss']
})
export class CardQuartoComponent implements OnInit {

  @Input()
  quarto: QuartoDTO;
  
  @Output()
  refreshQuartos = new EventEmitter();

  constructor(private pgService: PagesService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  removerQuarto(): void {
    this.pgService.openDialogConfirm().subscribe(data => {
      if (data) {
        this.pgService.removerQuarto(this.quarto.id).pipe(finalize(() => {
          this.refreshQuartos.emit();
        })).subscribe();
      }
    });
  }

  atualizarQuarto(): void {
    this.dialog.open(
      QuartoFormComponent, 
      {
        width: '100%', 
        disableClose: true,
        data: this.quarto
      }).afterClosed().subscribe(data => {
        this.pgService.atualizaQuarto(data).pipe(finalize(() => {
          this.refreshQuartos.emit();
        })).subscribe();
      });
  }

}
