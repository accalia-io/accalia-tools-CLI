const pluralize = require('pluralize')

module.exports = {
  name: 'generate:controller',
  description: 'Create new empty controller inside src/app/controllers',
  run: async toolbox => {
    const {
      parameters: { first },
      createController,
    } = toolbox

    const name = pluralize.isPlural(first) ? first : pluralize.plural(first)

    await createController('src/app/controllers', name)
  },
};