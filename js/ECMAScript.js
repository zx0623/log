概述
ECMAScript 是面向对象的编程语言

对象
1.构造函数（constructors）,利用它，可通过执行代码创建对象：给对象 分配存储，然后通过赋初始话对象属性的全部或部分，所有的构造函数
2.所有的构造函数的实例 都是对象，
3.每个构造函数都有Prototype属性，被用于基于原型继承 和 属性共享
4.ECMAScript 支持基于原型继承。每一个构造函数都有一个相关联的原型，它创建的所有对象都拥有一个隐含的引用指向那个与其构造函数相关联的原型（所谓的对象的原型）。更深一步讲，原型还可能会拥有 到它的原型的隐含的非空引用，依此类推；这被称为原型链(prototypechain)。

定义：
类型： 数据取值的集合
原始值： undefined ，null ，number，boolean, string
对象：未排序的属性的集合，其中每个属性包含一个原语值、对象或函数。被作为属性保存的函数被称为方法。
构造函数：是一种创建并初始化对象的函数对象。每个工作；构造函数都拥有一个相关联的原型对象，用它来实现继承和共享属性。 
原型：是一种对象，被用在 ECMAScript 中实现继承结构、状态和行为

对象类型
readOnly 该属性是一个只读属性，使用ECMAScript代码写入该属性的企图被忽略。
DontEnum 该属性不被 for-in 枚举
DontDelete 删除该属性的企图被忽略
Internal   内部属性没有名字，且不可通过属性访问运算符直接访问

内部属性和方法
ECMAScript实现的产生和操作内部属性的行为必须是 这里所描述的方法。
prototype  该对象的 原型
get 返回该属性的值
put 
canPut
HasProperty 
Delete
DefaultValue
引用类型 Reference 的值又被用于表达式求值的中间值，且不能被对象的属性存储

如果某个命名属性的特性值没有在此规范中明确给出，那么它的默认值
 value  undefined
 Get undefined
 Set undefined
 Writable false
 Enumerable false
 Configurable false

对象共有的 内部属性
Prototype 
class
extensible
get
getOwnProperty 返回此对象的完全填入的自身命名属性的属性描述，如果不存在就返回undefined
getProperty 返回此对象的完全填入的自身命名属性的属性描述，如果不存在返回 undefined
Put 指定命名属性设为第二个参数的值，flog 控制失败处理
CanPut 
HasProperty 返回一个Boolean 值，说明对象是否含有给定的属性
delete 从对象上指定删除的属性。flog 控制失败处理
DefineOwnProperty 创建或者修改自身命名属性为拥有属性描述的状态