import Enemy from './enemy';
import Fighter from "./fighter";

export default class Charactere implements Fighter{
    name: string;
    gender: string;
    lifeLevel = 100;

    constructor(name: string, gender: string) {
        this.name = name;
        this.gender = gender;
    }

    summary(){
        console.log(this)
    }

    attack(enemy: Enemy){
        let attackForce = Math.floor(Math.random() * 100 + 1);
        console.log(`La force de l'attaque est ${attackForce}`);
        enemy.lifeLevel = this.lifeLevel - attackForce;
    }

    takeDamage(damage: number) {
        let damageSuffured = Math.floor(damage * 0.5);
        this.lifeLevel = damageSuffured;
        console.log(`Vous avez subis ${damageSuffured}`)
    }
}
