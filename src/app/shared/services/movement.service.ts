import { Injectable } from '@angular/core';
import { BankStatement } from '../models/bank-statement.model';
import { Movement } from '../models/movement.model';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovementService {

  constructor(private http: HttpClient) { }

  async validateMovements(movements: Movement[], bankStatements: BankStatement[]): Promise<void> {
    const endPoint = '/api/movements/validation';
    await lastValueFrom(this.http.post(env.apiUrl + endPoint, { movements, bankStatements }))
      .then((data: any) => {
        console.log(data)
        // this._movements$.next(data.movements);
        // this._bankStatements$.next(data.bankStatements);
        // const movementsAndBankStatements = [...data.movements, ...data.bankStatements];
        // movementsAndBankStatements.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        // this._movements$AndBalances$.next([...movementsAndBankStatements]);
      })
      .catch((err: any) => {
        console.log(err);
      })
  }
}
