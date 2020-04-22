module.exports = {
  name: 'generate:crud',
  description: 'Create new crud inside src/app/controlers',
  run: async toolbox => {
    const {
      parameters,
      createModel,
      createController,
    } = toolbox

    const name = parameters.first

    const type = parameters.options.type || 'sequelize';

    const model = parameters.options.model 

    if (model) {
      await createModel('src/app/models', name)
    } 
  
    await createController('src/app/controllers', name, type)
  },
};