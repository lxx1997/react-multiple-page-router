const { override } =  require("customize-cra");
const htmlWebpackPlugin = require("html-webpack-plugin")
const overrideConfig = () => (config) => {
  config.entry = {
    main: "./src/index.js",
    page1: "./src/pages/page1/index.js",
    page2: "./src/pages/page2/index.js"
  }

  config.output = {
    filename: "[name].[fullhash].js",
    path: __dirname + '/dist',
  }

  config.plugins.push(
    new htmlWebpackPlugin({
      title: "main",
      template: "./public/index.html",
      filename: "main.html",
      chunks: ["main"]
    }),
    

    new htmlWebpackPlugin({
      title: "Page1",
      template: "./public/index.html",
      filename: "page1.html",
      chunks: ["page1"]
    }),
    
    new htmlWebpackPlugin({
      title: "Page2",
      template: "./public/index.html",
      filename: "page2.html",
      chunks: ["page2"]
    })
  )
  return config
}
module.exports = override(overrideConfig())