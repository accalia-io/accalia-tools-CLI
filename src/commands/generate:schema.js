const pluralize = require('pluralize')

module.exports = {
  name: 'generate:schema',
  description: 'Create new schema inside src/app/schemas',
  run: async toolbox => {
    const {
      parameters: { first },
      createSchema,
    } = toolbox

    const name = pluralize.isSingular(first) ? first : pluralize.singular(first)

    await createSchema('src/app/schemas', name)
  },
};