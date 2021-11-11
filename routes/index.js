const express = require('express');
const router = express.Router();

router.get('/', (requete, reponse) => reponse.render('index'));
router.get('/allo', (requete, reponse) => reponse.send('allo les amis'));
router.get('/salut', (requete, reponse) => {
    reponse.render('salut', {
        nom: 'Bob Larue',
        login: 'larueb',
        pwd: 'qwerty',
        roles: ['admin', 'normal', 'cms', 'autre']
    });
});
module.exports = router;