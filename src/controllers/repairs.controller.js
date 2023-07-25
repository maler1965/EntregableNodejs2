const Repairs = require('../models/repairs.model');

exports.findAllUsers = async (req, res) => {
  try {
    const repairs = await Repairs.findAll({
      where: {
        status: 'pending',
      },
    });

    res.status(200).json({
      status: 'success',
      repairs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong',
      error,
    });
  }
};

exports.createUsers = async (req, res) => {
  //async se pone para indicar que sera una funcion que tiene que esperar o depende del tiempo en que le envien o guarden la informacion.
  try {
    const { date, userId } = req.body;

    const newUser = await Repairs.create({
      //await se pone junto con async cuando se tiene que esperar un tiempo de ejecucion.
      date,
      userId,
    });

    res.status(201).json({
      status: 'success',
      message: 'product created successfully!',
      newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!',
      error,
    });
  }
};

exports.findOneUser = async (req, res) => {
  try {
    const { user } = req;

    res.status(200).json({
      status: 'success',
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong',
      error,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { user } = req;

    await user.update({ status: 'cancelled' });

    return res.status(200).json({
      status: 'success',
      message: 'Repair deleted successfully',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong',
      error,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { user } = req;

    await user.update({ status: 'completed' });

    res.status(200).json({
      status: 'success',
      message: 'Repairs updated successfully',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong',
      error,
    });
  }
};
