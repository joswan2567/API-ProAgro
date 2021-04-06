import { Component, OnInit } from '@angular/core';
import { PerdaService } from 'src/app/services/perda.service';
import { PerdaCadastro } from 'src/app/models/perda.model';
@Component({
  selector: 'app-perdas-list',
  templateUrl: './perdas-list.component.html',
  styleUrls: ['./perdas-list.component.css'],
})
export class PerdasListComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'cpf', 'colheitaData', 'colheitaTipo', 'actions'];
  perdas: PerdaCadastro[];
  currentPerda: PerdaCadastro | null;
  currentIndex = -1;
  cpf = '';

  lat = 51.678418;
  lng = 7.809007;

  constructor(private perdaService: PerdaService) { }

  ngOnInit(): void {
    this.retrievePerdas();
  }

  retrievePerdas(): void {
    this.perdaService.getAll()
      .subscribe(
        data => {
          this.perdas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrievePerdas();
    this.currentPerda = null;
    this.currentIndex = -1;
  }

  setActivePerda(perda, index): void {
    this.currentPerda = perda;
    this.currentIndex = index;
  }

  removeAllPerdas(): void {
    this.perdaService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrievePerdas();
        },
        error => {
          console.log(error);
        });
      this.currentPerda = null;
      this.currentIndex = -1;
  }

  searchCPF(): void {
    this.perdaService.findByCPF(this.cpf)
      .subscribe(
        data => {
          this.perdas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  delete(row){
    console.log(row);
  }
}
