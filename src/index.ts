const prompts = require('prompts');
import Charactere from "./charactere";
import Ennemy from "./ennemy";


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
            { title: 'Oui', value: 'fight'},
            { title: 'Non', value: 'fight'}
        ],
    },
];

(async () => {
    const response = await prompts(createCharactere);
    let newCharacter = new Charactere(response.name, response.gender);
    console.log('vos pv: ' + newCharacter.lifeLevel + '\n' + newCharacter.summary());
    console.log('ennemi en approche!!!')
    

})();