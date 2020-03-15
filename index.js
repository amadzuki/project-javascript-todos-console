const myTodos = ["Write the letters", "Eat some lunch", "Run around the city"]

const showTodos = todos => {
  for (index = 0; index < todos.length; index++) {
    const item = todos[index]

    console.log(`[${index + 1}] ${item}`)
  }
}

showTodos(myTodos)
