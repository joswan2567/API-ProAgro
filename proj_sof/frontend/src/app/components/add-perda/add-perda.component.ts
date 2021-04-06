import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PerdaService } from 'src/app/services/perda.service';
import { DialogErrorComponent } from '../dialog-error/dialog-error.component';
import { DialogMapComponent } from '../dialog-map/dialog-map.component';

@Component({
  selector: 'app-add-perda',
  templateUrl: './add-perda.component.html',
  styleUrls: ['./add-perda.component.css'],
})
export class AddPerdaComponent implements OnInit {
  blockRegister: boolean = false;
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

  constructor(private router: Router, private activeRoute: ActivatedRoute, 
    private perdaService: PerdaService, private formBuilder: FormBuilder, 
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(250)])],
      email: new FormControl(),
      cpf: new FormControl(),
      latLocalizacao: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
      lngLocalizacao: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
      colheitaTipo: new FormControl(),
      colheitaData: new FormControl(),
      eventoOcorrido: new FormControl(),
      id: new FormControl()
    });

    let id = this.activeRoute.snapshot.params['id'];
    if (id != null) {
      this.form.controls['id'].setValue(id);
      this.getPerda(id);
    }
  }

  showOldRegister(latConflict, lngConflict) {
    const dialogRef = this.dialog.open(DialogMapComponent, {
      data: {
        latCurrent: parseFloat(this.form.controls['latLocalizacao'].value),
        lngCurrent: parseFloat(this.form.controls['lngLocalizacao'].value),
        latConflict: parseFloat(latConflict),
        lngConflict: parseFloat(lngConflict),
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == null)
        this.newPerda();
      else
        this.blockRegister = true;
    });
  }
  getPerda(id): void {
    this.perdaService.get(id).
      subscribe(
        data => {
          this.populaDados(data)
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePerda(data): void {
    this.perdaService.update(data.id, data)
      .subscribe(
        response => {
          console.log(response);
          console.log('O registro foi atualizado!');
          this.router.navigate(['/perdas'], {relativeTo:this.activeRoute});
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  populaDados(data) {
    this.form.controls['nome'].setValue(data.nome);
    this.form.controls['cpf'].setValue(data.cpf);
    this.form.controls['email'].setValue(data.email);
    this.form.controls['latLocalizacao'].setValue(data.loclat);
    this.form.controls['lngLocalizacao'].setValue(data.loclng);
    this.form.controls['eventoOcorrido'].setValue(data.eventoocorrido);
    this.form.controls['colheitaData'].setValue(data.colheitadata);
    this.form.controls['colheitaTipo'].setValue(data.colheitatipo);
  }

  checaVeracidade() {
    if ((this.form.controls['colheitaData'].value != null) &&
      (this.form.controls['latLocalizacao'].value != null) &&
      (this.form.controls['lngLocalizacao'].value != null)) {
      console.log('campos');
      const data = {
        colheitadata: this.form.controls['colheitaData'].value,
        loclat: this.form.controls['latLocalizacao'].value,
        loclng: this.form.controls['lngLocalizacao'].value,
        nome: "",
        cpf: "",
        email: "",
        colheitatipo: "",
        eventoocorrido: "",
      };
      this.perdaService.checaVerac(data).subscribe(
        response => {
          console.log(response);
          if (response != null) {
            // this.submitted = true;
            this.showOldRegister(response.loclat, response.loclng);
          }
        },
        error => {
          console.log(error);
        });
    }
  }

  savePerda(): void {
    if (this.form.invalid) {
      this.dialog.open(DialogErrorComponent);
      // this.showOldRegister();
      return;
    }
    this.form.disable();
    const data = {
      id: this.form.controls['id'].value,
      nome: this.form.controls['nome'].value,
      cpf: this.form.controls['cpf'].value,
      email: this.form.controls['email'].value,
      loclat: this.form.controls['latLocalizacao'].value,
      loclng: this.form.controls['lngLocalizacao'].value,
      colheitatipo: this.form.controls['colheitaTipo'].value,
      colheitadata: this.form.controls['colheitaData'].value,
      eventoocorrido: this.form.controls['eventoOcorrido'].value,
    };
    if (data.id == null) {
      this.perdaService.create(data).subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
    }
    else{
      this.updatePerda(data);
    }
  }

  newPerda(): void {
    // this.submitted = false;
    this.form.disable();
    window.location.reload();
  }

}
