import { Component, OnInit } from '@angular/core';
import { WorksService } from "../works.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

    works = [];
    workId: number;

    constructor(private _worksService: WorksService, private route: ActivatedRoute) {
      this.route.params.subscribe(res => this.workId = res.work);
    }

    ngOnInit() {
        this._worksService.getWorks()
            .subscribe(resWorkData => this.works = resWorkData.works);
    }

}
