const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

router.post('/', userController.createUser);
router.get('/', userController.getAllUser);
//router.get('/:id', userController.getUserById);
router.get('/search', userController.getUserByName);
/*Creare API "get" per ogni proprietà */
module.exports = router;
