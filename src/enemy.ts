import charactere from './charactere'
import Charactere from "./charactere";
import Fighter from "./fighter";

export default class Enemy implements Fighter{
    lifeLevel= 100;

    attack(charactere: Charactere){
        let attackForce = Math.floor(Math.random() * 100 + 1);
        console.log(`La force de l'attaque est ${attackForce}`);
        charactere.lifeLevel = this.lifeLevel - attackForce;
    }

    takeDamage(damage: number){
        let damageSuffured = Math.floor(damage * 0.5);
        this.lifeLevel = damageSuffured;
        console.log(`Vous avez subis ${damageSuffured}`)
    }
}
