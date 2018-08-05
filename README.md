# 使用React编写TodoList功能

## React搭建
###node.js的安装
[nodeJS官网](https://nodejs.org/en/ "nodeJS官网")  
拥有lts与current两个版本，一般使用lts版
###npm的安装
win安装  

    npm install npm -g
查看版本

    npm -v
###react的安装
[React官网](https://reactjs.org/ "React官网")

本项目使用React-create-app创建新项目  

    npm install -g create-react-app
    create-react-app todolist 

## 完成功能

###编写todolist功能

###完成新增列表项的功能

###完成列表项的删除功能


##React组件与通信
1.父组件向子组件传递属性（方法）  
2.子组件调用父组件方法（通过参数传值出去）  
3.父组件通过属性的形式向子组件传递参数  
4.子组件通过props接受父组件传递过来的参数  

##React引用样式布局
###新增样式的两种方式  
####1.style行间样式 
    style={{background:"green"}}
第一个花括号是js表达式；第二个花括号是对象
####2.className
    className={'red-btn'}
class与定义组件的时候冲突，所以不建议class，react中用className关键词.
###解决render函数一个包裹标签的问题  
    <React.Fragment>
       html  //不用再包一层div了
    </React.Fragment>


##代码优化
1、在构造函数中做好this指向的改变，下面就不用.bind(this)，可以改变代码的执行性能  
2、解构赋值  
3、解决render函数中代码过长  