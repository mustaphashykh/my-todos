import { useEffect } from "react"
import Header from "./components/Header"
import Input from "./components/Input"
import Notes from "./components/Notes"
import { useDispatch } from "react-redux"
import { todosAction } from "./Store"

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem('todo')) {
      dispatch(todosAction.readTodo())
    }
  }
  )
  return (
    <div>
      <Header />
      <div className="lg:grid lg:grid-cols-5">
        <div className="lg:col-span-2 mx-auto lg:mt-20">
          <Input />
        </div>
        <div className="lg:col-span-3 lg:mt-8 lg:pr-8">
          <Notes />
        </div>
      </div>
    </div>
  )
}

export default App
