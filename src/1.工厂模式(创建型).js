/* 
  一个class 即为一个类 一个工厂, 通过new 去生成 新的 产品
*/

class Product {
  constructor (name) {
    this.name = name
  }

  init() {
    console.log('init')
  }

  func1() {
    console.log('func1')
  }
}

class Creator {
  create(name) {
    return new Product(name)
  }
}

let creator = new Creator()
let p = creator.create()
let p2 = new Product('p2')

p.init()
p.func1()
p2.init()