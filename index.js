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
  constructor(id, task, [...tags], favorite, completed) {
    this.id = id
    this.task = task
    this.tags = [...tags]
    this.favorite = favorite
    this.completed = completed
  }
}

// function to add todo
const addTodo = (newTask, newTags, newFavorite, newCompleted) => {
  const lastID = myTodos
    .map(todo => todo.id)
    .reduce((max, currentValue) => Math.max(max, currentValue))
  const newTodo = new todo(
    lastID + 1,
    newTask,
    newTags,
    newFavorite,
    newCompleted
  )
  myTodos.push(newTodo)
}

// function to view todo
const showTodos = todos => {
  for (index = 0; index < todos.length; index++) {
    const item = todos[index].task
    const completed = () => {
      return todos[index].completed ? `☑` : `□`
    }
    const favorite = () => {
      return todos[index].favorite ? `★` : ``
    }
    console.log(`${completed()} ${item} ${favorite()}`)
  }
}

// function to search todo including certain text
const searchTodo = (todos, textToSearch) => {
  const foundTodos = []

  for (index = 0; index < todos.length; index++) {
    const lowerCaseItem = todos[index].task.toLowerCase()
    const lowerCaseText = textToSearch.toLowerCase()

    if (lowerCaseItem.includes(lowerCaseText)) {
      foundTodos.push(todos[index])
    }
  }

  console.log(foundTodos)
}

// addTodo()

// searchTodo(myTodos, "the")

showTodos(myTodos)
