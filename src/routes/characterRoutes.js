const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');

router.post('/characters', characterController.addCharacter);
router.get('/characters', characterController.getCharacters);
router.get('/characters/:id', characterController.getCharacterById);
router.delete('/characters/:id', characterController.deleteCharacter);

module.exports = router;