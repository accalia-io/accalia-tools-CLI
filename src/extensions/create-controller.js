module.exports = (toolbox) => {
  const { filesystem, template, print: { success, error } } = toolbox;

  async function createController(folder, name) {
    name = name.charAt(0).toUpperCase() + name.slice(1);

    if (!name) {
      error('Name must be specified');
      return
    }

    await template.generate({
      template: 'backend/controller.js.ejs',
      target: `${folder}/${name}Controller.js`,
      props: { name },
    })

    success(`Generated ${folder}/${name}.`)
  }

  toolbox.createController = createController
};