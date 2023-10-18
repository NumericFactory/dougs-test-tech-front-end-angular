import { Component, OnInit } from '@angular/core';
import { MovementService } from '../shared/services/movement.service';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'dougs-movement-list',
  templateUrl: './movement-list.component.html',
  styleUrls: ['./movement-list.component.scss']
})
export class MovementComponent implements OnInit {

  constructor(public dataSvc: DataService, private _movementSvc: MovementService) { }

  ngOnInit(): void {
    // request fake data from the server
    this.dataSvc.getData();
  }

}
