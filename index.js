const Toolkit = require('actions-toolkit')
const tools = new Toolkit()
const octokit = tools.createOctokit()

const packagejson = tools.getPackageJSON()
const nvmrc = tools.getFile('.nvmrc')

(async() => {
  
})