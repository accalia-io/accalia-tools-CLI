module.exports = (toolbox) => {
  const { filesystem, template, print: { success, error } } = toolbox;

  async function createModel(folder, name) {
    name = name.charAt(0).toUpperCase() + name.slice(1);

    if (!name) {
      error('Name must be specified');
      return
    }

    await template.generate({
      template: 'backend/model.js.ejs',
      target: `${folder}/${name}.js`,
      props: { name },
    })

    success(`Generated ${folder}/${name}.`)
  }

  toolbox.createModel = createModel
};