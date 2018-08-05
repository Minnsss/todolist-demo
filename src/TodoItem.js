import React, {Component} from  'react';

class TodoItem extends Component{


	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete() {
		//console.log(this.props.index);
		this.props.delete(this.props.index)//子组件如果想要和父组件通信，子组件要调用父组件传递过来的方法
	}

	//子组件调用父组件传递的方法向父组件传递参数


	render () {
		const {content} = this.props;

		return (
			<div onClick={this.handleDelete}>{content}</div>
		)
	}
}

export default TodoItem;