import { QuartoFormComponent } from './quarto-form/quarto-form.component';
import { finalize } from 'rxjs/operators';
import { QuartoDTO } from '../../model/models';
import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-quartos',
  templateUrl: './quartos.component.html',
  styleUrls: ['./quartos.component.scss']
})
export class QuartosComponent implements OnInit {
  loading = true;
  quartos: QuartoDTO[];

  constructor(private pgService: PagesService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.atualizaQuartos();
  }

  atualizaQuartos(): void {
    this.loading = true;
    this.pgService.getQuartos().pipe(finalize(() => {
      this.loading = false;
    })).subscribe(data => {
      this.quartos = data.content;
    });
  }

  novoQuarto(): void {
    this.dialog.open(QuartoFormComponent, {width: '100%', disableClose: true}).afterClosed().subscribe(data => {
      if (data) {
        this.pgService.inserirQuarto(data).pipe(finalize(() => {
          this.atualizaQuartos();
        })).subscribe();
      }
    });
  }

}
