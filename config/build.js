process.env.NODE_ENV = 'production'

const rm = require('rimraf')
const ora = require('ora')
const log = console.log
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const prodConfig = require('./webpack.prod')
const compiler = webpack(prodConfig)

const spinner = ora('Building for production...')
spinner.start()

rm(path.resolve(__dirname, '../dist'), err => {
  if (err) {
    throw new Error(err)
  }

  compiler.run((err, stats) => {
    if (err) {
      throw new Error(err)
    } else {
      spinner.stop()

      process.stdout.write(
        stats.toString({
          colors: true,
          modules: false,
          children: false,
          chunks: false,
          chunkModules: false
        }) + '\n\n'
      )

      if (stats.hasErrors()) {
        log(chalk.red('Build failed with errors.\n'))
        process.exit(1)
      }

      log(chalk.cyan('Build complete.\n'))
    }
  })
})
