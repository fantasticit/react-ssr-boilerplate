import CSSModulesRequireHook from 'css-modules-require-hook/preset'

require('asset-require-hook')({
  extensions: ['jpg', 'png'],
  name: '[name].[hash].[ext]'
})

require('asset-require-hook')({
  extensions: ['woff', 'woff2', 'eot', 'ttf', 'otf'],
  name: '[name].[hash].[ext]',
  mimetype: 'application/font-woff',
  limit: 10000
})

import fs from 'fs'
import path from 'path'
import express from 'express'

const app = express()
const isProd = process.env.NODE_ENV === 'production'

const serverRenderer = isProd
  ? require('./entry-server')
  : require('./src/entry-server').default

// Server hot-reloading
if (!isProd) {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('./build/webpack.dev.conf')
  const compiler = webpack(config)

  app.use(
    webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath
    })
  )
  app.use(webpackHotMiddleware(compiler, { heartbeat: 5000, log: console.log }))
}

// dist
app.use(express.static('dist'))

function render({ res, markup, state }) {
  let template = fs.readFileSync(
    path.resolve(__dirname, './index.html'),
    'utf-8'
  )

  const isProd = process.env.NODE_ENV === 'production'
  if (isProd) {
    const page = template.replace(
      '<!-- react-ssr-outlet -->',
      markup + `<script>window.__INITIAL_STATE__ = ${state}</script>`
    )
    res.end(page)
  } else {
    const page = template.replace(
      '<!-- react-ssr-outlet -->',
      markup +
        `<script>window.__INITIAL_STATE__ = ${state}</script>` +
        `<script src="/bundle.js"></script>`
    )
    res.end(page)
  }
}

// Client Server Rendering
app.get('*', (req, res) => {
  const { page, state } = serverRenderer(req, res)

  render({ req, res, markup: page, state })
})

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000')
})
