# react-typescript-boilerplate

### A boilerplate for developing React App with TypeScript

## Screenshot

![react-typescript-boilerplate](http://pcj3271t7.bkt.clouddn.com/react-typescript-boilerplate.png)

## Install

> I recomment you to use the [`hy-cli`](https://github.com/justemit/hy-cli) to generate project with this boilerplate.

1.  clone the repo via git:

```bash
git clone --depth=1 https://github.com/justemit/react-typescript-boilerplate.git ypur-project-name
```

2.  install dependencies with npm(or yarn).

```bash
cd your-project-name
npm install
```

## Run

Start the app in the `dev` envirenmet.This starts a webpack dev server that sends hot updates to the app:

```bash
npm run dev
```

It will open `http://localhost:8080` default.To use another port, you can just edit the `package.json`'s scripts:

```bash
"scripts": {
  "dev": "webpack-dev-server --port=your-port --config config/webpack.dev.js",
},
```

## Packaging

To package the app:

```bash
npm run build
```

## License

MIT
