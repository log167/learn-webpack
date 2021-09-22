module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        /*
          false:不对当前的js处理做polyfill填充
          usage:依据用户源代码中所用到的新语法进行填充
          entry：依据当前所筛选出来的浏览器决定填充什么
        */
        useBuiltIns: 'usage',
        corejs: 3
      }
    ]
  ]
}