import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id: number;
  player: Object;


  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(
      (params) => {
          this.id = params.id;
        }
      );
  }

  ngOnInit() {
    this.data.getPlayerById(this.id)
      .subscribe(
        (data) =>
          this.player = data
      )
  }

}
