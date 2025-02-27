// type initialization
interface TodoItem {
  id : number;
  task : string;
  completed : boolean;
  dueDate : Date;
}

// todo class
class TodoList {
  private todos : TodoItem[] = []; // array to store todo items

  // method to add a new todo item
  addTodo(task : string, dueDate : Date) : void {
    const newTodo : TodoItem = {
      id : this.todos.length + 1,
      task,
      completed : false,
      dueDate
    };
    this.todos.push(newTodo);
  }

  // method to list all todo items
  listTodos() : TodoItem[] {
    return this.todos;
  }

  // method to mark a todo item as completed
  completeTodo(id : number) : void {
    const todo = this.todos.find((item) => item.id === id);
    if (todo) {
      todo.completed = true;
    } else {
      console.error(`Todo with id ${id} not found.`);
    }
  }

  // method to remove a todo item
  removeTodo(id : number) : void {
    const todoIndex = this.todos.findIndex((item) => item.id === id);
    if (todoIndex !== -1) {
      this.todos.splice(todoIndex, 1);
    } else {
      console.error(`Todo with id ${id} not found.`);
    }
  }

  // method to filter todo items by completed status
  filterTodos(completed : boolean) : TodoItem[] {
    return this.todos.filter((todo) => todo.completed === completed);
  }

  // method to update the task desc of a todo item
  updateTodo(id : number, newTask : string) : void {
    const todo = this.todos.find((item) => item.id === id);
    if (todo) {
      todo.task = newTask;
    } else {
      console.error(`Todo with id ${id} not found.`);
    }
  }

  // method to clear all completed todos
  clearCompletedTodos() : void {
    this.todos = this.todos.filter((todo) => !todo.completed);
  }

  // list todos with due dates
  listTodosWithDueDates() : void {
    this.todos.forEach((todo) => {
      console.log(
        `ID: ${todo.id}, Task: ${todo.task}, Completed: ${todo.completed}, Due Date: ${todo.dueDate.toDateString()}`
      );
    });
  }
}


// usage example
const myTodos = new TodoList();
myTodos.addTodo("Learn TypeScript", new Date('2025-03-01'));
myTodos.addTodo("Build a Todo App", new Date('2025-03-05'));
myTodos.addTodo("Deploy Todo App", new Date('2025-03-10'));

console.log("All Todos:", myTodos.listTodos());

myTodos.completeTodo(1);
myTodos.completeTodo(3);
console.log("After Completing Todos 1 and 3:", myTodos.listTodos());

myTodos.clearCompletedTodos();
console.log("After Clearing Completed Todos:", myTodos.listTodos());

// myTodos.listTodosWithDueDates()

