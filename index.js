const myTodos = ["Write the letter", "Eat some lunch", "Run around the city"]

const addTodo = () => {
  const todo = prompt("Add your task!")
  myTodos.push(todo)
}

const showTodos = todos => {
  for (index = 0; index < todos.length; index++) {
    const item = todos[index]

    console.log(`[${index + 1}] ${item}`)
  }
}

const searchTodo = (todos, textToSearch) => {
  const foundTodos = []

  for (index = 0; index < todos.length; index++) {
    const lowerCaseItem = todos[index].toLowerCase()
    const lowerCaseText = textToSearch.toLowerCase()

    if (lowerCaseItem.includes(lowerCaseText)) {
      foundTodos.push(todos[index])
    }
  }

  console.log(foundTodos)
}

addTodo()

showTodos(myTodos)

searchTodo(myTodos, "the")
