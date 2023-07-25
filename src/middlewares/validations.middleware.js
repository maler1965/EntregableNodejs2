const { body, validationResult } = require('express-validator');

const validFields = (req, res, next) => {
  //
  const errors = validationResult(req); //aqui si atrapo los errores que arrojen la validacion de abajo, esos errores de la validacion vienen en validationResult() que pertenece a la libreria de express-validator, que vienen en la req

  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'error',
      errors: errors.mapped(),
    });
  }

  next();
};

exports.updateUserValidation = [
  //aqui solo estoy declarando las validaciones o los requisitos que quiero que tengan los datos
  body('name').notEmpty().withMessage('Name is required'), //estas validaciones arrogan errores pero aqui no los estoy atrapando
  body('description')
    .notEmpty()
    .withMessage('Description is required')
    .isLength({ min: 10 })
    .withMessage('Description must be at least 10 characters long'),
  validFields,
];
