export class BankStatement {
    id: number;
    date: Date;
    balance: number;
    constructor(id: number, date: string, balance: number) {
        this.id = id;
        this.date = new Date(date);
        this.balance = balance;
    }
}