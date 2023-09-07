module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  media: false,
  separator: '__',
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    // 禁用一些小程序class不支持的分割
    preflight: false, // 默认样式
    // divideColor: false, // 分割边框颜色
    // divideOpacity: false, // 分割边框透明度
    // divideStyle: false, // 分割边框类型
    // divideWidth: false, // 分割边框长度
    // space: false, // 间距
    // placeholderColor: false, // 占位符颜色
    // placeholderOpacity: false, // 占位符透明度
    // ringWidth: false, // 阴影相关
    // boxShadow: false, // 阴影
    // container: false, // 容器布局
    // borderColor: false, // 边框颜色（在高版本中，生成了一个带 * 的样式，所以需要禁用）
  },
}
