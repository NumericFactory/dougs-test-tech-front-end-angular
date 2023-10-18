import { Component, Input } from '@angular/core';
import { BankStatement } from 'src/app/shared/models/bank-statement.model';


@Component({
  selector: 'dougs-item-bank-balance',
  templateUrl: './item-bank-balance.component.html',
  styleUrls: ['./item-bank-balance.component.scss']
})
export class ItemBalanceComponent {
  @Input() bankStatementItem!: BankStatement;
}
