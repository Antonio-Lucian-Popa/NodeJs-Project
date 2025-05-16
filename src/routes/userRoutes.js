// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const checkJwt = require('./middlewares/keycloakMiddleware');

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.post('/login', authController.login);
router.post('/register', authController.register);
router.get('/:id', userController.getUserById);

router.get('/secure-data', checkJwt, (req, res) => {
    res.json({ message: 'Acces autorizat!', user: req.user });
});

module.exports = router;
