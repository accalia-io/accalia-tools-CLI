module.exports = {
  name: 'generate:controller',
  description: 'Create new model inside src/app/model',
  run: async toolbox => {
    const {
      parameters,
      createController,
    } = toolbox

    const name = parameters.first

    await createController('src/app/controllers', name)
  },
};