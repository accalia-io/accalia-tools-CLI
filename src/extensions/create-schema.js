module.exports = (toolbox) => {
  const { filesystem, template, print: { success, error } } = toolbox;

  async function createSchema(folder, name) {
    const Name = name.charAt(0).toUpperCase() + name.slice(1);

    if (!name) {
      error('Name must be specified');
      return
    }

    await template.generate({
      template: 'backend/schema.js.ejs',
      target: `${folder}/${Name}.js`,
      props: { Name, name },
    })

    success(`Generated ${folder}/${Name}.`)
  }

  toolbox.createSchema = createSchema
};