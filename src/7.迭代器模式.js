/**迭代器模式1 */
class Iterator {
  constructor(conatiner) {
    this.list = conatiner.list
    this.index = 0
  }
  next() {
    if (this.hasNext()) {
      return this.list[this.index++]
    }
    return null
  }
  hasNext() {
    if (this.index >= this.list.length) {
      return false
    }
    return true
  }
}

class Container {
  constructor(list) {
    this.list = list
  }
  getIterator() {
    return new Iterator(this)
  }
}

// 测试代码
let container = new Container([1, 2, 3, 4, 5])
let iterator = container.getIterator()
while (iterator.hasNext()) {
  console.log(iterator.next())
}

/**迭代器模式2 */
let arr = [1, 2, 3, 4]
let nodeList = document.getElementsByTagName('p')
let m = new Map()
m.set('a', 100)
m.set('b', 200)

// function each(data) {
//     // 生成遍历器
//     let iterator = data[Symbol.iterator]()

//     // console.log(iterator.next())  // 有数据时返回 {value: 1, done: false}
//     // console.log(iterator.next())
//     // console.log(iterator.next())
//     // console.log(iterator.next())
//     // console.log(iterator.next())  // 没有数据时返回 {value: undefined, done: true}

//     let item = {done: false}
//     while (!item.done) {
//         item = iterator.next()
//         if (!item.done) {
//             console.log(item.value)
//         }
//     }
// }

function each(data) {
  for (let item of data) {
    console.log(item)
  }
}

each(arr)
each(nodeList)
each(m)
