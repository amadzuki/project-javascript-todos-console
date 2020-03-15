const myTodos = []

const addTodos = () => {
  const todo = prompt("Add your task!")
  myTodos.push(todo)
}

const showTodos = todos => {
  for (index = 0; index < todos.length; index++) {
    const item = todos[index]

    console.log(`[${index + 1}] ${item}`)
  }
}

addTodos()

showTodos(myTodos)
