const { exec } = require('child_process')
const util = require('util')
const execPromise = util.promisify(exec)

const test = async () => {
    await execPromise(`
        echo "No test specified :)"
  `)
}

test()