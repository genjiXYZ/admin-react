/*
 * @Author: your name
 * @Date: 2021-08-13 20:17:04
 * @LastEditTime: 2021-08-13 23:23:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-test-app/tailwind.config.js
 */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {

    colors: {
      lly_bg:"#F6F7F9" ,
   
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}