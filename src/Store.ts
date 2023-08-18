import { configureStore, createSlice } from "@reduxjs/toolkit";

export interface RootState { id: number, title: string, des: string, date: string, isEdit: string, allTodos: { title: string, des: string, date: string, }[], state: string, message: string, isShow: boolean }

const initialState: RootState = { id: -1, title: '', des: '', date: '', isEdit: 'false', allTodos: [], state: '', message: '', isShow: false }

const todos = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        readTodo(state) {
            const todos = localStorage.getItem('todo')
            if (todos)
                state.allTodos = JSON.parse(todos)
        },
        addTodo(state) {
            if (state.isEdit === 'false') {
                state.isShow = true
                state.message = 'uploading....'
                state.state = 'uploading'
                const DATE = new Date()
                state.date = DATE.getDate() + "/" + DATE.getMonth() + "/" + DATE.getFullYear()
                state.allTodos.push({ title: state.title.trim(), des: state.des.trim(), date: state.date })
                localStorage.setItem('todo', JSON.stringify(state.allTodos))
                state.title = ''
                state.des = ''
                state.date = ''
                state.message = 'successfully added....'
                state.state = 'uploaded'
            } else {
                state.allTodos[state.id].title = state.title
                state.allTodos[state.id].des = state.des
                localStorage.setItem('todo', JSON.stringify(state.allTodos))
                state.isEdit = 'false'
                state.title = ''
                state.des = ''
                state.message = 'successfully updated....'
                state.state = 'uploaded'
                state.isShow = true
            }
        },
        takeValues(state, action) {
            if (action.payload.name === 'title') {
                state.title = action.payload.value
            } else {
                state.des = action.payload.value
            }
        },
        editTodo(state, action) {
            state.isEdit = 'true'
            const item = state.allTodos[action.payload]
            state.id = action.payload
            state.title = item.title
            state.des = item.des
        },
        deleteTodo(state, action) {
            state.message = 'successfully deleted....'
            state.state = 'uploaded'
            state.isShow = true
            const newArray = [...state.allTodos.slice(0, action.payload), ...state.allTodos.slice(action.payload + 1)];
            state.allTodos = newArray
            localStorage.setItem('todo', JSON.stringify(state.allTodos))
        },
        hideProgress(state) {
            state.isShow = false
        }
    }
})

const store = configureStore({
    reducer: todos.reducer
})

export default store

export const todosAction = todos.actions