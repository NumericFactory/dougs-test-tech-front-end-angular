import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { MovementService } from 'src/app/shared/services/movement.service';

@Component({
  selector: 'dougs-validation-actions',
  templateUrl: './validation-actions.component.html',
  styleUrls: ['./validation-actions.component.scss']
})
export class ValidationActionsComponent {

  constructor(public dataSvc: DataService, private _movementSvc: MovementService) { }

  callVerifyMovements() {
    this._movementSvc.validateMovements(this.dataSvc.movements, this.dataSvc.bankStatements)
  }

}
