const express = require('express');

//controllers
const userController = require('./../controllers/user.controller');

//middlewares
const userMiddleware = require('./../middlewares/user.middleware');
const validationMiddleware = require('./../middlewares/validations.middleware');

const router = express.Router();

router.get('/', userController.findAllUsers);
router.post('/', userController.createUsers);

// router.use('/:id', userMiddleware.validUser);

router
  .use('/:id', userMiddleware.validUser)
  .route('/:id')
  .get(userController.findOneUser)
  .patch(validationMiddleware.updateUserValidation, userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
