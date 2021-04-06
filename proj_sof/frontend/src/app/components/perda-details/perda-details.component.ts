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
    // this.getPerda(this.route.snapshot.paramMap.get('id'));
  }


}
