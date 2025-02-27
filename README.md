# TypeScript Todo List Application

## Overview
This is a simple Todo List application built using TypeScript. It demonstrates the use of TypeScript interfaces, classes, and methods to manage a list of todo items.

## Requirements
1. **TodoItem Interface**  
   - Properties:
     - `id: number` - Unique identifier for each todo item.
     - `task: string` - Description of the todo item.
     - `completed: boolean` - Status of the todo item.
     - `dueDate: Date` - Due date for the todo item.
2. **TodoList Class**  
   - Manages an array of `TodoItem` objects.
   - Methods:
     - `addTodo(task: string, dueDate: Date): void` - Adds a new todo item.
     - `listTodos(): TodoItem[]` - Lists all todo items.
     - `completeTodo(id: number): void` - Marks a todo item as completed.
     - `removeTodo(id: number): void` - Removes a todo item.
     - `filterTodos(completed: boolean): TodoItem[]` - Filters todos by their completed status.
     - `updateTodo(id: number, newTask: string): void` - Updates the task description of a todo item.
     - `clearCompletedTodos(): void` - Clears all completed todos.
     - `listTodosWithDueDates(): void` - Lists all todos with their due dates.

## Features
- **Add Todo:** Add a new todo item with a task description and a due date.
- **List Todos:** Display all todo items.
- **Complete Todo:** Mark a specific todo item as completed.
- **Remove Todo:** Delete a todo item by its ID.
- **Filter Todos:** Filter todo items by their completed status.
- **Update Todo:** Edit the task description of an existing todo item.
- **Clear Completed Todos:** Remove all completed items from the l
