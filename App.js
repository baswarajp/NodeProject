// const names = require('./3-names')
// const sayHi = require('./4-sayHi')
// const item = require('./5-alternativeExports')
// require('./6-functionWithoutExport')
// // console.log("names",names);
// // console.log("item",item);

// // sayHi(names.Praj)
// // sayHi(names.baswa)

const _ = require('lodash')
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log("new items",newItems);
