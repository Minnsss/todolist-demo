import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';


//定义一个React组件
class TodoList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			list: [
				// 'learn react',
				// 'learn english',
				// 'learn vue'
			],
			inputValue: ''
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleBtnClick(){
		this.setState({
			list: [...this.state.list, this.state.inputValue],
			inputValue:''
		})
		//this.state.list.push('hello world');
	}

	handleInputChange(e) {
		this.setState({
			inputValue: e.target.value
		})
		//console.log(e.target.value)
	}

	// handleItemClick (index) {
	// 	//console.log(index)
	// 	const list = [...this.state.list];//拷贝一个副本，操作副本 性能&可调试性
	// 	list.splice(index, 1);
	// 	// this.setState({
	// 	// 		// 	list: list
	// 	// 		// })
	// 	this.setState({list})
	// }

	handleDelete(index) {

		//console.log(index);
		const list = [...this.state.list];//拷贝一个副本，操作副本 性能&可调试性
		list.splice(index, 1);
		// this.setState({
		// 		// 	list: list
		// 		// })
		this.setState({list})
	}

	getTodoItem() {
		return(
			this.state.list.map((item, index) => {
				//父组件通过属性的形式传递参数给子组件
				// 子组件通过props接收父组件传递的参数
				return (
					<TodoItem
						delete={this.handleDelete}
						key={index}
						content={item}
						index={index}
					/>
				)
				//return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
			})
		)
	}


	render() {
		// jsx 语法
		return (
			<Fragment>
				<div>
					<input value={this.state.inputValue} onChange={this.handleInputChange}/>
					{/*style={{background:'red', color:'#fff'}}*/}

					<button className={'red-btn'} onClick={this.handleBtnClick}>add</button>
				</div>
					<ul>{this.getTodoItem()}</ul>
			</Fragment>
		);
	}
}

export default TodoList;