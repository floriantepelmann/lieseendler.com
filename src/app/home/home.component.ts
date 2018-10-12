import { Component, OnInit } from '@angular/core';
import { WorksService } from "../works.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  works = [];

  constructor(private _worksService: WorksService) { }

  ngOnInit() {
      this._worksService.getWorks()
          .subscribe(resWorkData => this.works = resWorkData.works);
  }
}
