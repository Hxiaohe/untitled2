autoSize()
window.onresize = function () {
  autoSize()
}
function autoSize () {
// 获取当前浏览器的视窗宽度，放在w中
  var w = document.documentElement.clientWidth
  // 计算实际html font-size大小
  var size = w * 100 / 375
  // 获取当前页面中的html标签
  var html = document.querySelector('html')
  // 设置字体大小样式
  html.style.fontSize = size + 'px'
}
