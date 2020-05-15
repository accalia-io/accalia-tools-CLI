const pluralize = require('pluralize')

module.exports = {
  name: 'generate:crud',
  description: 'Create new crud inside src/app/controlers',
  run: async toolbox => {
    const {
      parameters: { first, options },
      createModel,
      createController,
    } = toolbox

    const type = options.type || 'sequelize';
    const name = pluralize.isSingular(first) ? first : pluralize.singular(first)
    const { model } = options 

    if (model) {
      await createModel('src/app/models', name)
    }
  
    await createController('src/app/controllers', name, type)
  },
};