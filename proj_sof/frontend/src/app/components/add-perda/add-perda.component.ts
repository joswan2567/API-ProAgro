import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PerdaService } from 'src/app/services/perda.service';
import { DialogErrorComponent } from '../dialog-error/dialog-error.component';
import { DialogMapComponent } from '../dialog-map/dialog-map.component';

@Component({
  selector: 'app-add-perda',
  templateUrl: './add-perda.component.html',
  styleUrls: ['./add-perda.component.css'],
})
export class AddPerdaComponent implements OnInit {
  blockRegister: boolean;
  public form: FormGroup;
  startDate = new Date();
  eventos = ['Chuva Excessiva',
    'Geada',
    'Granizo',
    'Seca',
    'Vendaval',
    'Raio',
  ];
  colheitaTipos = ['Cebola',
    'Banana',
    'Tomate',
    'Mandioca',
    'Soja',
    'Batata',
    'Trigo',
    'Arroz',
    'Milho',
    'Feijão',
    'Outra',
  ];

  submitted = false;

  constructor(private perdaService: PerdaService, private formBuilder: FormBuilder, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(250)])],
      email: new FormControl(),
      cpf: new FormControl(),
      localizacao: new FormControl(),
      colheitaTipo: new FormControl(),
      colheitaData: new FormControl(),
      eventoOcorrido: new FormControl(),
    });
  }

  showOldRegister(){
     const dialogRef = this.dialog.open(DialogMapComponent, {
      data: {latlngCurrent: "teste", latlngOld: "teste"}
    });
      dialogRef.afterClosed().subscribe(result => {
        this.blockRegister = result;
    });
  }

  checaVeracidade(){
    if((this.form.controls['colheitaData'].value != null) && (this.form.controls['localizacao'].value != null)){

    }
  }

  savePerda(): void {
    if (this.form.invalid){
      this.dialog.open(DialogErrorComponent);
      // this.showOldRegister();
      return;
    }
    const data = {
      nome: this.form.controls['nome'].value,
      cpf: this.form.controls['cpf'].value,
      email: this.form.controls['email'].value,
      localizacao: this.form.controls['localizacao'].value,
      colheitaTipo: this.form.controls['colheitaTipo'].value,
      colheitaData: this.form.controls['colheitaData'].value,
      eventoOcorrido: this.form.controls['eventoOcorrido'].value,
    };
    this.perdaService.create(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }

  // newPerda(): void {
  //   this.submitted = false;
  //   this.perda = {
  //     nome: '',
  //     cpf: '',
  //   };
  // }

}
