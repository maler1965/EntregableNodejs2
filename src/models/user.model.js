const { DataTypes } = require('sequelize');
const { db } = require('./../database/config');

const User = db.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  passwordChangedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'password_changed_at',
  },
  profileImgUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue:
      'https://images.pexels.com/photos/935762/pexels-photo-935762.jpeg',
    field: 'profile_img_url',
  },
  role: {
    type: DataTypes.ENUM('client', 'employee'),
    allowNull: false,
    defaultValue: 'client',
  },
  status: {
    type: DataTypes.ENUM('available', 'disabled'),
    allowNull: false,
    defaultValue: 'available',
  },
});

module.exports = User;
