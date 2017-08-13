实现一个node模块（module）。该module的功能是，统计某个css文件中，使用次数最多的属性，以及使用的权重最高的选择器。
该模块的使用方式大致如下:

    require('your-module')(cssString) // cssString为css文件的内容

返回值示例如下:
````
{
    mostFreq: ['margin'],
    mostWeight: ['#a#b', '#a #c']
}
````
