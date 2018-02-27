export class Contact {
    userid: number;
    name: string;
    age: number;

    constructor(data) {
        Object.assign(this, data);
    }

    getContact(){
        return '${this.userid}, ${this.name}, ${this.age}';
    }
}