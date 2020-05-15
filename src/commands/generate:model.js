const pluralize = require('pluralize')

module.exports = {
  name: 'generate:model',
  description: 'Create new model inside src/app/model',
  run: async toolbox => {
    const {
      parameters: { first },
      createModel,
    } = toolbox

    const name = pluralize.isSingular(first) ? first : pluralize.singular(first)

    await createModel('src/app/models', name)
  },
};