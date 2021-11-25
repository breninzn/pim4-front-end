import { QuartoDTO } from './../../../model/models';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PagesService } from '../../pages.service';

@Component({
  selector: 'app-quarto-form',
  templateUrl: './quarto-form.component.html',
  styleUrls: ['./quarto-form.component.scss']
})
export class QuartoFormComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder, 
              private pgService: PagesService, 
              @Inject(MAT_DIALOG_DATA) public data: QuartoDTO) {
    this.formGroup = this.fb.group({
      id: null,
      numero: [null, Validators.required],
      preco: [null, Validators.required],
      descricao: [null, Validators.required],
      quantidade_lugares: [null, Validators.required],
    });
  }
  ngOnInit(): void {
    if (this.data) {
      this.formGroup.setValue(this.data);
    }
  }

}
