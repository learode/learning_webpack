# Learning Webpack

A utility program used to bundle modular Javascript.

### Default webpack config setting

- Structure dependent

<em>Webpack;</em> has a default config setting that can help in simple projects to bundle are Js files.
This default setting has to do with the how our projects files are structured. This structure is thus:

    root:/project-dir
        '-> node_modules
        '-> package.json
        '-> package.lock.json
        '-> src
          '-> index.js
        '-> dist
          '-> index.html

A tweak of the `package.json` file on the line that reads `"main":"index.js"` to `"private": true`
To run the webpack then run the below on the prompt in your working dir

    npx webpack

### Custom webpack config setting

- form far more complex project structure.
- For the feel of fully controlling your development flow.

It also allow us to create our own `webpack.config.js` file

Creating a simple webpack config.js file called `simple.config.js`:
This file is to enable restructuring my dir struct
