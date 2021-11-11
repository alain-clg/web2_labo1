const express = require('express');
const router = express.Router();

router.get('/', (requete, reponse) => reponse.send('vous etes dans /users'));
router.get('/toto', (requete, reponse) => reponse.send('vous etes dans /users/toto'));
router.get('/tous', (requete, reponse) => {
    let usagers = [{        
        nom: 'Bob Larue',
        login: 'larueb',
        pwd: 'qwerty',
        roles: ['admin', 'normal', 'cms', 'autre'] },
    {   nom: 'Frank Larue',
        login: 'laruef',
        pwd: 'qwertyf',
        roles: ['normal']},
    {  nom: 'Roger Larue',
        login: 'laruer',
        pwd: 'qwertyr',
        roles: ['admin', 'normal']
    }];
    reponse.render('tous', {
        usagers: usagers
    });
});
module.exports = router;