const User = require('../models/user.model');

exports.findAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        status: 'available',
      },
    });

    res.status(200).json({
      status: 'success',
      users,
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
    const { name, email, description, password, role } = req.body;

    const newUser = await User.create({
      //await se pone junto con async cuando se tiene que esperar un tiempo de ejecucion.
      name,
      email,
      description,
      password,
      role,
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

exports.updateUser = async (req, res) => {
  try {
    const { user } = req;
    const { name, description } = req.body;

    await user.update({ name, description });

    res.status(200).json({
      status: 'success',
      message: 'User updated successfully',
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

    await user.update({ status: 'disabled' });

    return res.status(200).json({
      status: 'success',
      message: 'User deleted successfully',
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
