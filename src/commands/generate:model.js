module.exports = {
  name: 'generate:model',
  description: 'Create new model inside src/app/model',
  run: async toolbox => {
    const {
      parameters,
      createModel,
    } = toolbox

    const name = parameters.first

    await createModel('src/app/models', name)
  },
};