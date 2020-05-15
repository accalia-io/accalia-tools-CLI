const pluralize = require('pluralize')

module.exports = (toolbox) => {
  const { template, print: { success, error } } = toolbox;

  function getTemplate(type) {
    switch (type) {
      case 'sequelize':
        return 'backend/controllers/controllerSequelize.js.ejs';
      default:
        return 'backend/controllers/controllerEmpty.js.ejs';
    }
  
  }

  async function createController(folder, name, type) {
    const Name = name.charAt(0).toUpperCase() + name.slice(1);
    const names = pluralize.plural(name);

    if (!name) {
      error('Name must be specified');
      return
    }

    const controllerTemplate = await getTemplate(type);

    await template.generate({
      template: controllerTemplate,
      target: `${folder}/${Name}Controller.js`,
      props: { Name, name, names },
    })

    success(`Generated ${folder}/${Name}.`)
  }

  toolbox.createController = createController
};