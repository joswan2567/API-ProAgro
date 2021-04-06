import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PerdaService } from 'src/app/services/perda.service';
import { PerdaCadastro } from 'src/app/models/perda.model';
import { ActivatedRoute, Router, RouterLinkWithHref } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-perdas-list',
  templateUrl: './perdas-list.component.html',
  styleUrls: ['./perdas-list.component.css'],
})
export class PerdasListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  displayedColumns: string[] = ['nome', 'cpf', 'colheitaData', 'colheitaTipo', 'actions'];
  perdas: PerdaCadastro[];
  currentPerda: PerdaCadastro | null;
  currentIndex = -1;
  cpf = "";

  lat = 51.678418;
  lng = 7.809007;

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private perdaService: PerdaService,
    private dialog: MatDialog) { }

  ngAfterViewInit() {
    this.retrievePerdas();

  }
  ngOnInit(): void {

  }
  searchCPF() {
    // if(this.)
    const filterValue = this.cpf;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  retrievePerdas(): void {
    this.perdaService.getAll()
      .subscribe(
        data => {
          this.perdas = data;
          console.log(data);
          this.dataSource = new MatTableDataSource<PerdaCadastro>(this.perdas);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;

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

  // searchCPF(): void {
  //   this.perdaService.findByCPF(this.cpf)
  //     .subscribe(
  //       data => {
  //         this.perdas = data;
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  editPerda(data) {
    this.router.navigate(['/add', { id: data.id }])
    console.log(data);
  }

  deletePerda(data) {
    const dialogRef = this.dialog.open(DialogDeleteComponent);
    // this.router.navigate(['/add', { id: data.id }])
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.perdaService.delete(data.id)
          .subscribe(
            response => {
              console.log(response);
              window.location.reload();
              // this.perdas.splice( this.perdas.findIndex(x=> x.id == data.id));
            },
            error => {
              console.log(error);
            });
      }
    });

    console.log(data);
  }
}
