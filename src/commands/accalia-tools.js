
const command = {
  name: 'accalia-tools',
  run: async toolbox => {
    const { print } = toolbox

    print.info('Welcome to your Accalia Tool Kit')
  }
}

module.exports = command
