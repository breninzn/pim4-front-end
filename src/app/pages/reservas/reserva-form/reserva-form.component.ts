import { QuartoDTO, ReservaDTO } from './../../../model/models';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PagesService } from '../../pages.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reserva-form',
  templateUrl: './reserva-form.component.html',
  styleUrls: ['./reserva-form.component.scss']
})
export class ReservaFormComponent implements OnInit {

  formGroup: FormGroup;
  quartos: QuartoDTO[];

  constructor(private fb: FormBuilder,
              private pgService: PagesService,
              @Inject(MAT_DIALOG_DATA) public data: ReservaDTO) {
    this.formGroup = this.fb.group({
      id: null,
      nome: [null, Validators.required],
      celular: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      cpf: [null, Validators.required],
      dataEntrada: [null, Validators.required],
      dataSaida: [null, Validators.required],
      quarto: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.pgService.getQuartos().subscribe(data => {
      this.quartos = data.content;
      if (this.data) {
        this.formGroup.setValue(this.data);
        this.formGroup.get('quarto').setValue(this.data.quarto.id);
      }
    });
  }
}
