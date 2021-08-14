/*
 * @Author: your name
 * @Date: 2021-08-13 18:50:39
 * @LastEditTime: 2021-08-14 12:30:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-test-app/craco.config.js
 */

const CracoLessPlugin = require("craco-less");
const CracoAlias = require("craco-alias");

module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  plugins: [
    //craco-less
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          },
        },
        cssLoaderOptions: {},
      },
    },

    //craco-alias
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.path.json",
      },
    },
  ],
};
