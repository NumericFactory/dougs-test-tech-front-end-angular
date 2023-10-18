export class Movement {
    id: number;
    date: Date;
    wording: string;
    amount: number;
    constructor(id: number, date: string, wording: string, amount: number) {
        this.id = id;
        this.date = new Date(date);
        this.wording = wording;
        this.amount = amount;
    }
}
