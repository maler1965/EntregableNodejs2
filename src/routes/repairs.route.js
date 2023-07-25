const express = require('express');

//controllers
const repairsController = require('./../controllers/repairs.controller');

//middlewares
const userMiddleware = require('./../middlewares/repairs.middleware');
const validationMiddleware = require('./../middlewares/validations.middleware');

const router = express.Router();

router.get('/', repairsController.findAllUsers);
router.post('/', repairsController.createUsers);

// router.use('/:id', userMiddleware.validUser);  validationMiddleware.updateUserValidation,

router
  .use('/:id', userMiddleware.validUser)
  .route('/:id')
  .get(repairsController.findOneUser)
  .patch(repairsController.updateUser)
  .delete(repairsController.deleteUser);

module.exports = router;
