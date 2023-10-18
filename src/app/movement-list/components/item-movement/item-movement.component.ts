import { Component, Input } from '@angular/core';
import { Movement } from 'src/app/shared/models/movement.model';

@Component({
  selector: 'dougs-item-movement',
  templateUrl: './item-movement.component.html',
  styleUrls: ['./item-movement.component.scss']
})
export class ItemMovementComponent {

  @Input() mouvementItem!: Movement;

}
