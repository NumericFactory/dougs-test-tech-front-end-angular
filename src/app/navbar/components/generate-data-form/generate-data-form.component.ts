import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { MovementService } from 'src/app/shared/services/movement.service';

export enum OptionsGenerateMovementsListEnum {
  noOption = "with no option",
  optionWithDuplicate = "with duplicate",
  optionWithMissing = "with missing",
  optionWithDuplicateAndWithMissing = "with duplicate and with missing"
}

// all the values from the enum are presented in the mapping
export const OptionsGenerate2LabelMapping: Record<OptionsGenerateMovementsListEnum, string> = {
  [OptionsGenerateMovementsListEnum.noOption]: "liste de mouvements sans option",
  [OptionsGenerateMovementsListEnum.optionWithDuplicate]: "avec doublons",
  [OptionsGenerateMovementsListEnum.optionWithMissing]: "avec manquants",
  [OptionsGenerateMovementsListEnum.optionWithDuplicateAndWithMissing]: "avec doublons et manquants",
};

@Component({
  selector: 'dougs-generate-data-form',
  templateUrl: './generate-data-form.component.html',
  styleUrls: ['./generate-data-form.component.scss']
})
export class GenerateDataFormComponent {

  constructor(public dataSvc: DataService, private _movementSvc: MovementService) { }

  startAt: string | undefined = undefined

  public optionsGenerate2LabelMapping = OptionsGenerate2LabelMapping;
  public options = Object.values(OptionsGenerateMovementsListEnum);

  changeStartDate(value: string) {
    console.log(value)
    this.startAt = value;
  }

  generateMovementsList(type: string, event: SubmitEvent) {
    event.preventDefault();
    this.dataSvc.getData(type, this.startAt)
  }


}
