import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { BankStatement } from '../models/bank-statement.model';
import { Movement } from '../models/movement.model';
import { OptionsGenerateMovementsListEnum } from 'src/app/navbar/components/generate-data-form/generate-data-form.component';
import { environment as env } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _movements$ = new BehaviorSubject<Movement[]>([]);
  private _bankStatements$ = new BehaviorSubject<BankStatement[]>([]);
  private _movements$AndBalances$ = new BehaviorSubject<any[]>([]);

  movements$ = this._movements$.asObservable();
  bankStatements$ = this._bankStatements$.asObservable();
  movements$AndBalances$ = this._movements$AndBalances$.asObservable();

  constructor(private http: HttpClient) { }

  /**
   * Get fake data from the server
   * reponse is an object with two arrays: movements and bankStatements
   */
  async getData(type?: string, startAt?: string): Promise<void> {
    const endPoint = '/getdata-from-bank-sync';
    const options = this.setQueryString(type, startAt);
    await lastValueFrom(this.http.get(env.apiUrl + endPoint, options as { params: HttpParams }))
      .then((data: any) => {
        this._movements$.next(data.movements);
        this._bankStatements$.next(data.bankStatements);
        const movementsAndBankStatements = [...data.movements, ...data.bankStatements];
        movementsAndBankStatements.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        this._movements$AndBalances$.next([...movementsAndBankStatements]);
      })
      .catch((err: any) => {
        console.log(err);
      })
  }


  /**
   * Set the query string for the http request
   * @param type 
   * @param startAt 
   * @returns 
   */
  setQueryString(type: string | undefined, startAt: string | undefined): { params: HttpParams } {
    const options = { params: new HttpParams() };
    switch (type) {
      case OptionsGenerateMovementsListEnum.optionWithDuplicate:
        options.params = new HttpParams()
          .set('withDuplicate', 'true')
        break;
      case OptionsGenerateMovementsListEnum.optionWithMissing:
        options.params = new HttpParams()
          .set('withMissing', 'true')
        break;
      case OptionsGenerateMovementsListEnum.optionWithDuplicateAndWithMissing:
        options.params = new HttpParams()
          .set('withDuplicate', 'true')
          .set('withMissing', 'true')
        break;
    }
    if (startAt) {
      options.params = options.params.set('startAt', startAt)
    }
    return options
  }

  get movements(): Movement[] {
    return this._movements$.getValue();
  }

  get bankStatements(): BankStatement[] {
    return this._bankStatements$.getValue();
  }



}
