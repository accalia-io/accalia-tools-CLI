module.exports = {
  name: 'generate:page',
  description: 'Create new page inside src/pages',
  run: async toolbox => {
    const {
      parameters: { first },
      createComponent,
    } = toolbox

    await createComponent('src/pages', first)
  },
};