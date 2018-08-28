/**不影响原有的功能,增添新的功能 */

/****** 装饰器1 */
function mixins(...list) {
  return function (target) {
    Object.assign(target.prototype, ...list)
  }
}

const Foo = {
  foo() { alert('foo') }
}

@mixins(Foo)
class MyClass {}

let obj = new MyClass();
obj.foo() // 'foo'

/****** 装饰器2 */
function readonly(target, name, descriptor){

  //第一个参数 target 是类的原型对象(Person.prototype)，
  //第二个参数 name 是所要修饰的属性名，本例中为 getName() 函数， 
  //第三个参数为该属性的描述对象。

  // descriptor对象原来的值如下
  // {
  //   value: specifiedFunction,
  //   enumerable: false,
  //   configurable: true,
  //   writable: true
  // };
  descriptor.writable = false;
  return descriptor;
}

class Person {
    constructor() {
        this.first = 'A'
        this.last = 'B'
    }

    @readonly
    name() { return `${this.first} ${this.last}` }
}

var p = new Person()
console.log(p.name()) // A B
p.name = function () {} // 这里会报错，因为 name 是只读属性

/****** 装饰器3 */
function log(target, name, descriptor) {
  var oldValue = descriptor.value;

  descriptor.value = function() {
    console.log(`Calling ${name} with`, arguments);
    return oldValue.apply(this, arguments);
  };

  return descriptor;
}

class Math {
  @log
  add(a, b) {
    return a + b;
  }
}

const math = new Math();
const result = math.add(2, 4);
console.log('result', result); //Calling add with`, arguments.... result 6

/****** 装饰器4 */
// import { readonly } from 'core-decorators'

// class Person {
//     @readonly
//     name() {
//         return 'zhang'
//     }
// }

// let p = new Person()
// alert(p.name())
// // p.name = function () { /*...*/ }  // 此处会报错


import { deprecate } from 'core-decorators';

class Person {
  @deprecate
  facepalm() {}

  @deprecate('We stopped facepalming')
  facepalmHard() {}

  @deprecate('We stopped facepalming', { url: 'http://knowyourmeme.com/memes/facepalm' })
  facepalmHarder() {}
}

let person = new Person();

person.facepalm();
// DEPRECATION Person#facepalm: This function will be removed in future versions.

person.facepalmHard();
// DEPRECATION Person#facepalmHard: We stopped facepalming

person.facepalmHarder();
// DEPRECATION Person#facepalmHarder: We stopped facepalming
//
//     See http://knowyourmeme.com/memes/facepalm for more details.