## 任务二：零基础JavaScript编码（二）
【平均用时 1.4 天】
[【百度地址】](http://ife.baidu.com/course/detail/id/91)
[【我的代码】](https://github.com/wangsiyuan233/IFE2017/blob/master/%E5%BD%AC%E5%BD%AC%E5%AD%A6%E9%99%A2/binbin_task2/binbin_task2.html)
[【效果预览】](https://wangsiyuan233.github.io/IFE2017/%E5%BD%AC%E5%BD%AC%E5%AD%A6%E9%99%A2/binbin_task2/binbin_task2.html)


### 任务目的
- 在上一任务基础上继续JavaScript的体验
- 学习JavaScript中的if判断语法，for循环语法
- 学习JavaScript中的数组对象
- 学习如何读取、处理数据，并动态创建、修改DOM中的内容

### 任务描述
- 参考以下[示例代码](example.html)，页面加载后，将提供的空气质量数据数组，按照某种逻辑（比如空气质量大于60）进行过滤筛选，最后将符合条件的数据按照一定的格式要求显示在网页上

### 任务注意事项
- 实现简单功能的同时，请仔细学习JavaScript基本语法、事件、DOM相关的知识
- 请注意代码风格的整齐、优雅
- 代码中含有必要的注释
- 其中的数据以及60的判断逻辑可以自行设定
- 建议不使用任何第三方库、框架
- 示例代码仅为示例，可以直接使用，也可以完全自己重写

### 任务总结
1. DOM方法中只有insertBefore()，没有insertAfter()，需自己编写
```
function insertAfter(newElement,targetElement){
		var parent = targetElement.parentNode;
		if (targetElement == parent.lastChild) {
			parent.append(newElement);
		}else{
			parent.insertBefore(newElement,targetElement.nextSibling);
		}
}
```

2. 用到的数组操作:

  - 操作方法：slice()
  - 重排序方法：sort()
  - 迭代方法：forEach()/filter()
