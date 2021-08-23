export default class Charactere {
    name: string;
    gender: string;
    lifeLevel: number;

    constructor(name: string, gender: string,) {
        this.name = name;
        this.gender = gender;
        this.lifeLevel = Math.floor(Math.random() * 100 + 1);
    }

    summary(){
        return 'votre nom est ' + this.name + ' votre sexe est ' + this.gender + ' vous avez ' + this.lifeLevel + ' PV';
    }
}