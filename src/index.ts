const prompts = require('prompts');
import Charactere from "./charactere";
import Enemy from "./enemy";


const createCharactere = [
    {
        type: 'text',
        name: 'name',
        message: 'quel est ton nom ?'
    },

    {
        type: 'select',
        name: 'gender',
        message: 'quel est ton sexe ?',
        choices: [
            { title: 'Homme', value: 'gender'},
            { title: 'Femme', value: 'gender'}
        ],
    },

];

const fight = [
    {
        type: 'select',
        name: 'fight',
        message: 'Vous voulez combattre ?',
        choices: [
            { title: 'Oui', value: 1},
            { title: 'Non', value: 2}
        ],
    },
];


(async () => {
    const response = await prompts(createCharactere);
    let newCharacter = new Charactere(response.name, response.gender);
    console.log('vos pv: ' + newCharacter.lifeLevel);
    newCharacter.summary();
    console.log('ennemi en approche!!!');
    const moove = await prompts(fight)



})();