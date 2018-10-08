const { resolve } = require('path')

module.exports = async function module (moduleOptions) {
    const options = Object.assign({}, moduleOptions)

    // Options should allow specifying default theme/mode and a CDN

    this.addPlugin({
        src: resolve(__dirname, 'templates/plugin.js'),
        fileName: 'ace-editor-module.js',
        options,
        ssr: false,
    })
}

module.exports.meta = require('../package.json')
