module.exports = {
  name: 'generate:component',
  description: 'Create new component inside src/components',
  run: async toolbox => {
    const {
      parameters : { first : name },
      createComponent,
    } = toolbox

    await createComponent('src/components', name)
  },
};