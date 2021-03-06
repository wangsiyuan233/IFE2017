## 任务七：实现常见的技术产品官网的页面架构及样式布局
【平均用时 3.2 天】
[【百度地址】](http://ife.baidu.com/course/detail/id/102)
[【我的代码】](https://github.com/wangsiyuan233/IFE2017/tree/master/%E5%B0%8F%E8%96%87%E5%AD%A6%E9%99%A2/xiaowei_task7)
[【效果预览】](http://wangsiyuan233.cn/IFE2017/%E5%B0%8F%E8%96%87%E5%AD%A6%E9%99%A2/xiaowei_task7/xiaowei_task7.html)

### 任务目的
1. 通过实现一个常见的技术产品官网，加深对于HTML，CSS的实战能力
2. 学习掌握如何在没有标注的情况下实现设计稿到页面的精确转变

### 任务描述
- 通过HTML及CSS实现[设计稿PSD文件]()，效果如[效果图]()
- 设计稿是有一定宽度的，这个宽度为页面的最小宽度，也就是说，当浏览器窗口宽度小于设计稿宽度时，允许出现横向滚动条，页面内容宽度保持不变，但是当浏览器窗口宽度大于设计稿宽度时，页面部分内容的宽度应该保持和浏览器窗口宽度一致，具体哪些部分题目不做具体指明，看看大家的判断如何。

### 任务注意事项
- 只需要完成HTML，CSS代码编写，不需要写JavaScript
- 设计稿中的图片、文案均可自行设定
- 在Chrome中完美实现与设计稿的各项字体、布局、内外边距等样式
- 有能力的同学可以尝试跨浏览器的兼容性
- 有能力的同学可以在实现一遍后尝试用less, sass或者stylus等再实现一次

### 任务总结
- 重点：自定义下拉菜单

#### 待解决
- [x] 自定义下拉菜单溢出部分无法显示

#### 解决方案：
整个下拉菜单最外层父元素`position: relative;`

![](2018-04-21.png)
