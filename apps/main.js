const filterLevel = document.querySelector("#filter-level")
const filterMark = document.querySelector("#filter-mark")
const filterSort = document.querySelector("#filter-sort")

const addTaskBtn = document.querySelector("#add-task-btn")
const listedTasksBox = document.querySelector("#task")

const tasksList = []

const applyFilterLevel = (value) => {
  if (value === "all") {
    tasksList.forEach((task) => {
      listedTasksBox.append(task)
    })
  }
  tasksList.forEach((task) => {
    if (task.classList.contains(`${value}-task-box`)) {
      listedTasksBox.append(task)
    }
  })
}
const applyFilterMark = (value) => {
  if (value === "all") {
    tasksList.forEach((task) => {
      listedTasksBox.append(task)
    })
  }
  tasksList.forEach((task) => {
    if (task.classList.contains(value)) {
      listedTasksBox.append(task)
    }
  })
}
const applyFilterSort = (value) => {}

function filterBehavior(container) {
  const dropdownBtn = container.querySelector(".dropdown-btn")
  const dropdownOptions = container.querySelector(".dropdown-options")
  const dropdownValue = container.querySelector(".dropdown-value")

  // open/close dropdown box when click filter

  dropdownBtn.addEventListener("click", () => {
    dropdownOptions.classList.toggle("active")
  })

  document.addEventListener("click", (e) => {
    if (!dropdownBtn.contains(e.target) && !dropdownOptions.contains(e.target)) {
      dropdownOptions.classList.remove("active")
    }
  })

  // change filters display
  container.querySelectorAll(".dropdown-options li").forEach((option) => {
    option.addEventListener("click", () => {
      const value = option.getAttribute("data-value")
      const text = option.textContent

      dropdownValue.textContent = text
      dropdownOptions.classList.remove("active")

      applyFilter(container, value)
    })
  })
}

function applyFilter(container, value) {
  listedTasksBox.innerHTML = ""
  if (container == filterLevel) {
    applyFilterLevel(value)
  }
  if (container == filterMark) {
    applyFilterMark(value)
  }
  if (container == filterLevel) {
    applyFilterSort(value)
  }
}

const createNewTask = (textNote, levelNote) => {
  const taskBox = document.createElement("div")
  taskBox.classList.add("task-box", `${levelNote.value}-task-box`, "unMarked")

  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  checkbox.classList.add("task-item", `${levelNote.value}-task`)

  const span = document.createElement("span")
  span.classList.add("task-item", "task-content", `${levelNote.value}-task`)
  span.textContent = textNote

  const svgNS = "http://www.w3.org/2000/svg"
  const svg = document.createElementNS(svgNS, "svg")
  svg.setAttribute("width", "40")
  svg.setAttribute("height", "40")
  svg.setAttribute("viewBox", "0 0 24 24")
  svg.setAttribute("cursor", "pointer")
  svg.setAttribute("fill", "none")
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
  const path = document.createElementNS(svgNS, "path")
  path.setAttribute("d", "M10.79 3.09998C11.29 2.09998 12.71 2.09998 13.21 3.09998L15.57 7.87998L20.84 8.64998C21.94 8.80998 22.39 10.17 21.59 10.95L17.77 14.67L18.67 19.92C18.712 20.1682 18.6838 20.4232 18.5886 20.6562C18.4933 20.8892 18.3348 21.091 18.131 21.2387C17.9271 21.3864 17.686 21.4741 17.4349 21.492C17.1838 21.5099 16.9327 21.4573 16.71 21.34L12 18.86L7.27996 21.34C7.05722 21.4573 6.80611 21.5099 6.55501 21.492C6.30391 21.4741 6.06282 21.3864 5.85896 21.2387C5.6551 21.091 5.4966 20.8892 5.40136 20.6562C5.30611 20.4232 5.27792 20.1682 5.31996 19.92L6.21996 14.67L2.40996 10.95C1.60996 10.17 2.04996 8.80998 3.15996 8.64998L8.42996 7.87998L10.79 3.09998ZM11.99 4.03998L9.74996 8.59998C9.54996 8.99998 9.16996 9.27998 8.72996 9.33998L3.67996 10.08L7.33996 13.64C7.65996 13.94 7.79996 14.4 7.72996 14.84L6.85996 19.86L11.38 17.49C11.78 17.29 12.24 17.29 12.64 17.49L17.15 19.86L16.29 14.83C16.22 14.4 16.36 13.95 16.68 13.63L20.33 10.08L15.28 9.33998C15.0644 9.30737 14.8599 9.22302 14.684 9.09415C14.5081 8.96528 14.366 8.79572 14.27 8.59998L12 4.03998H11.99Z")
  path.setAttribute("fill", "#007BFF")
  svg.appendChild(path)
  svg.classList.add("task-item")

  listedTasksBox.appendChild(taskBox)
  taskBox.appendChild(checkbox)
  taskBox.appendChild(span)
  taskBox.appendChild(svg)

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      span.classList.add("completed")
    } else span.classList.remove("completed")
  })
  svg.addEventListener("click", () => {
    const isMarked = svg.classList.contains("marked")
    if (isMarked) {
      taskBox.classList.remove("marked")
      taskBox.classList.add("unMarked")
      path.setAttribute("d", "M10.79 3.09998C11.29 2.09998 12.71 2.09998 13.21 3.09998L15.57 7.87998L20.84 8.64998C21.94 8.80998 22.39 10.17 21.59 10.95L17.77 14.67L18.67 19.92C18.712 20.1682 18.6838 20.4232 18.5886 20.6562C18.4933 20.8892 18.3348 21.091 18.131 21.2387C17.9271 21.3864 17.686 21.4741 17.4349 21.492C17.1838 21.5099 16.9327 21.4573 16.71 21.34L12 18.86L7.27996 21.34C7.05722 21.4573 6.80611 21.5099 6.55501 21.492C6.30391 21.4741 6.06282 21.3864 5.85896 21.2387C5.6551 21.091 5.4966 20.8892 5.40136 20.6562C5.30611 20.4232 5.27792 20.1682 5.31996 19.92L6.21996 14.67L2.40996 10.95C1.60996 10.17 2.04996 8.80998 3.15996 8.64998L8.42996 7.87998L10.79 3.09998ZM11.99 4.03998L9.74996 8.59998C9.54996 8.99998 9.16996 9.27998 8.72996 9.33998L3.67996 10.08L7.33996 13.64C7.65996 13.94 7.79996 14.4 7.72996 14.84L6.85996 19.86L11.38 17.49C11.78 17.29 12.24 17.29 12.64 17.49L17.15 19.86L16.29 14.83C16.22 14.4 16.36 13.95 16.68 13.63L20.33 10.08L15.28 9.33998C15.0644 9.30737 14.8599 9.22302 14.684 9.09415C14.5081 8.96528 14.366 8.79572 14.27 8.59998L12 4.03998H11.99Z")
      path.setAttribute("fill", "#007BFF")
    } else {
      taskBox.classList.remove("unMarked")
      taskBox.classList.add("marked")
      path.setAttribute("d", "M8.78996 1.09998C9.28996 0.0999756 10.71 0.0999756 11.21 1.09998L13.57 5.87998L18.84 6.64998C19.94 6.80998 20.39 8.16998 19.59 8.94998L15.77 12.67L16.67 17.92C16.712 18.1682 16.6838 18.4232 16.5886 18.6562C16.4933 18.8892 16.3348 19.091 16.131 19.2387C15.9271 19.3864 15.686 19.4741 15.4349 19.492C15.1838 19.5099 14.9327 19.4573 14.71 19.34L9.99996 16.86L5.27996 19.34C5.05722 19.4573 4.80611 19.5099 4.55501 19.492C4.30391 19.4741 4.06282 19.3864 3.85896 19.2387C3.6551 19.091 3.4966 18.8892 3.40136 18.6562C3.30611 18.4232 3.27792 18.1682 3.31996 17.92L4.21996 12.67L0.409962 8.94998C-0.390038 8.16998 0.0499618 6.80998 1.15996 6.64998L6.42996 5.87998L8.78996 1.09998Z")
      path.setAttribute("fill", "#007BFF")
    }
  })
  tasksList.push(taskBox)
  return taskBox
}

function resetInputData() {
  document.querySelector("#add-task-field").value = ""
  document.querySelectorAll('input[name="level"]').forEach((radioCheckbox) => {
    radioCheckbox.checked = false
  })
}

const addTask = () => {
  const container = document.querySelector("#level")
  const textNote = document.querySelector("#add-task-field").value
  const levelNote = container.querySelector('input[name="level"]:checked')

  if (!textNote) alert("Please enter a task.")
  else if (!levelNote) alert("Please choose a difficulty.")
  else {
    // const newTask = createNewTask(textNote, levelNote)
    // listedTasksBox.appendChild(newTask)
    createNewTask(textNote, levelNote)
    resetInputData()
  }
}

// filter behaviors

filterBehavior(filterLevel)
filterBehavior(filterMark)
filterBehavior(filterSort)

//
addTaskBtn.addEventListener("click", addTask)