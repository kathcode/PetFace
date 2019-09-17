# Course from platzi of React avanzado

---

## Steps to configure webpack

---

**Install webpack:**

`$ npm i webpack webpack-cli --save-dev.`

**Create the file with the configuration:**

```Javascript
module.exports = {
  output: {
    filename: 'app.bundle.js'
  },
  plugins: []
};

```

**Install html plugin to load the bundle file:**

`$ npm i html-webpack-plugin --save-dev`

**Install a plugin for a server to launch the application:**

`$ npm i webpack-dev-server --save-dev`

**Modify the package.json with the new scripts:**

```Javascript
"scripts": {
    "build": "webpack",
    "dev": "webpack-dev-server",
    "test": "echo \"Error: no test specified\" && exit 1"
}
```

---

## Configuring React

---

**Install React and React-DOM:**

`$ npm install react react-dom`

**Inject the html in the DOM:**

index.html:

```html
<!DOCTYPE html>
<html lang="en">
    <head></head>
    <body>
        <div id="app"></div>
    </body>
</html>
```

index.js:

```Javascript
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render('Kath', document.getElementById('app'));

```

---

## Babel configuration (Loader)

---

> It is used for react-dom to recognize the html in the render.

**Install babel:**

`$ npm i @babel/core @babel/preset-env babel-loader @babel/preset-react --save-dev.`

**Configuring babel**

```javascript
module.exports = {
  output: {
    filename: 'app.bundle.js'
  },
  plugins: [new HtmlWebpack({ template: 'src/index.html' })],
  module: {
    rules: [
      {
        test: /\.js$/, // All the js files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}
```
## Notes:
- To deploy the application we are going to user [ZEIT](https://zeit.co)