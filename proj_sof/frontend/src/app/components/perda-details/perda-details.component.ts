import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerdaService } from 'src/app/services/perda.service';

@Component({
  selector: 'app-perda-details',
  templateUrl: './perda-details.component.html',
  styleUrls: ['./perda-details.component.css']
})
export class PerdaDetailsComponent implements OnInit {
  currentPerda = null;
  message = '';

  constructor(
    private perdaService: PerdaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getPerda(this.route.snapshot.paramMap.get('id'));
  }

  getPerda(id): void {
    this.perdaService.get(id).
      subscribe(
        data => {
          this.currentPerda = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePerda(): void {
    this.perdaService.update(this.currentPerda.id, this.currentPerda)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'O registro foi atualizado!';
        },
        error => {
          console.log(error);
        });
  }

  deletePerda(): void {
    this.perdaService.delete(this.currentPerda.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/perdas']);
        },
        error => {
          console.log(error);
        });
  }

}
