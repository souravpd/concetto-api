const ajv = require('../index');

ajv.addFormat('password', password => {
  return password.length >= 8;
});

const registerEventSchema = require('./registerEvent');
const registerTeamSchema = require('./registerTeam');
const registerWithTeamSchema = require('./registerWithTeam');

module.exports = {
  registerEventSchema,
  registerTeamSchema,
  registerWithTeamSchema
};
