const express = require('express');
const router = express.Router();
const Usagers = require('../modeles/usagers');

router.get('/', (requete, reponse) => reponse.send('vous etes dans /users'));
router.get('/toto', (requete, reponse) => reponse.send('vous etes dans /users/toto'));
router.get('/affiche', (requete, reponse) => {
    Usagers.getUsagers((err, usagers)=>{
        if (err) throw err;
        reponse.render('affiche', {usagers: usagers});
    }, 100);
    
});
router.get('/login', (requete, reponse) => reponse.render('login'));
router.get('/register', (requete, reponse) => reponse.render('register'));
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
        usagers: usagers,
        title : 'Mon beau titre pour USERS/tous'
    });
});

module.exports = router;