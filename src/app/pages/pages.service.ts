import { ReservaDTO, Pageable, QuartoDTO } from '../model/models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from '../componentes/dialog-confirm/dialog-confirm.component';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  contexto = 'http://192.168.15.6:8080/hotelaria-api/';

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  getReservas(): Observable<Pageable<ReservaDTO>> {
    return this.http.get<Pageable<ReservaDTO>>(`${this.contexto}reservas`);
  }

  inserirReserva(reserva: ReservaDTO) {
    return this.http.post<void>(`${this.contexto}reservas`, reserva);
  }

  atualizaReserva(reserva: ReservaDTO) {
    return this.http.put<void>(`${this.contexto}reservas/${reserva.id}`, reserva);
  }

  removerReserva(reserva: number) {
    return this.http.delete<void>(`${this.contexto}reservas/${reserva}`);
  }

  getQuartos(): Observable<Pageable<QuartoDTO>> {
    return this.http.get<Pageable<QuartoDTO>>(`${this.contexto}quartos`);
  }

  inserirQuarto(quarto: QuartoDTO): Observable<void> {
    return this.http.post<void>(`${this.contexto}quartos`, quarto);
  }

  atualizaQuarto(quarto: QuartoDTO): Observable<void> {
    return this.http.put<void>(`${this.contexto}quartos/${quarto.id}`, quarto);
  }

  removerQuarto(quarto: number) {
    return this.http.delete<void>(`${this.contexto}quartos/${quarto}`);
  }

  openDialogConfirm(): Observable<any> {
    return this.dialog.open(DialogConfirmComponent).afterClosed();
  }

}
