import 'core-js/stable'
import 'regenerator-runtime/runtime'

const sayHello = () => {
  console.log('hello');
}
sayHello()

const p1 = new Promise((res,rej) => {
  console.log('1111');
})
console.log(p1);

/* 
  开发模式：
    -watch
    -live server
  不足：
    1.所有源代码都会重新编译
    2.每次编译之后都需要进行文件读写
    3.live server
    4.不能实现局部刷新
*/