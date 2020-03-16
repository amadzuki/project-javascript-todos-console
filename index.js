const myTodos = [
  {
    id: 1,
    task: "Write the letter",
    tags: ["important"],
    favorite: true,
    completed: true
  },
  {
    id: 2,
    task: "Eat lunch",
    tags: ["health"],
    favorite: false,
    completed: true
  },
  {
    id: 3,
    task: "Run around the City",
    tags: ["health"],
    favorite: true,
    completed: false
  }
]
// todo object constructor
class todo {
  constructor(id, task, tags, favorite, completed) {
    this.id = id
    this.task = task
    this.tags = tags
    this.favorite = favorite
    this.completed = completed
  }
}

const addTodo = (newTask, newTags, newFavorite, newCompleted) => {
  const lastID = myTodos
    .map(task => task.id)
    .reduce((max, currentValue) => Math.max(max, currentValue))
  const newTodo = new todo(
    lastID + 1,
    newTask,
    newTags,
    newFavorite,
    newCompleted
  )
  todo.task = prompt("Add your task!")
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
