/**
 * Created by brook on 2017/8/13.
 */
const cssSort = require('./excute');

const str = `.fulvous { color: blue; }
#orotund { color: red; backgroung-color: black; }
.Luddite { color: green; backgroung-color: black; width: 20px; }
ul > li { color: pink; width: 20px; backgroung-color: black;}
a[data-biscuit="dunderfunk"] { color: pink; height: 10px; }
div#antipattern:nth-child(3).horsehair [id="ding"] { color: yellow; }`;

console.log(cssSort(str));




