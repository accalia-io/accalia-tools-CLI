module.exports = {
  name: 'generate:controller',
  description: 'Create new emity controller inside src/app/controllers',
  run: async toolbox => {
    const {
      parameters,
      createController,
    } = toolbox

    const name = parameters.first

    await createController('src/app/controllers', name)
  },
};