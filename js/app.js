const app = new Vue ({
	el: '#app',
	data: {
		title: "Hello! Todo in VueJS",
		textTodo: null,
		todos: []
	},
	methods: {
		addTodo(){
			console.log(this.textTodo);
			this.todos.push({
				title: this.textTodo,
				done: false,

			});
			this.textTodo = '';
		},
		removeTodo(todo) {
			const todoIndex = this.todos.indexOf(todo);
			this.todos.splice(todoIndex, 1);
		} ,
		allDone(){
			this.todos.forEach(todo => {
				todo.done = true;
			});
		}
		
	}
});