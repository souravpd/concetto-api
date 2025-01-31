const ajv = require('../index');

ajv.addFormat('password', password => {
  return password.length >= 8;
});

const loginSchema = require('./login');
const signupSchema = require('./signup');
const updatePasswordSchema = require('./updatePassword');
const verifyEmailSchema = require('./verifyEmail');

module.exports = {
  loginSchema,
  signupSchema,
  updatePasswordSchema,
  verifyEmailSchema
};
