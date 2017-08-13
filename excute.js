/**
 * Created by brook on 2017/8/13.
 */
const sortSpecificity = require('sort-specificity');
const csstoJson = require('cssjson');

module.exports = function (str) {
  const json = csstoJson.toJSON(str);
  const classes = Object.keys(json.children);
  const attrs = classes
    .map(key => json.children[key].attributes)
    .map(v => Object.keys(v))
    .reduce((cur, pre)=> [...cur, ...pre],[]);
  let obj = {};
  attrs.forEach((v, i) => {
    if (obj[v] === undefined) {
      obj[v] = 1;
    } else {
      obj[v] += 1;
    }
  });
  const arr = Object.keys(obj).map(key => ({ name: key, count: obj[key] }));
  return {
    mostFreq: arr.sort((a, b) => b.count - a.count),
    mostWeight: sortSpecificity(classes),
  }
};

