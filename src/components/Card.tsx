import React from "react";
import { useDispatch } from "react-redux";
import { todosAction } from "../Store";

const Card: React.FC<{ title: string, des: string, date: string, id: number }> = ({ title, des, date, id }) => {
    const dispatch = useDispatch()
    const editTodo = (id: number): void => {
        dispatch(todosAction.editTodo(id))
        setTimeout(() => {
            dispatch(todosAction.hideProgress())
        }, 2000);
    }
    const deleteTodo = (id: number): void => {
        dispatch(todosAction.deleteTodo(id))
        setTimeout(() => {
            dispatch(todosAction.hideProgress())
        }, 2000);
    }
    return (
        <div className='group hover:bg-indigo-500 ring-offset-2 ring-1 transition-all ring-indigo-600 mx-5 mb-5 rounded shadow-lg px-3 py-3'>
            <p className="pt-2">
                <span className='text-xl group-hover:text-white text-indigo-600 font-semibold pb-2'>title: </span>
                <span className='text-xl text-indigo-600 pb-2 group-hover:text-white'>{title}</span>
            </p>
            <p className="pt-2"> 
                <span className='text-xl text-indigo-600 font-semibold pb-2 group-hover:text-white'>description: </span>
                <span className='text-xl text-indigo-600 pb-2 group-hover:text-white'>{des}</span>
            </p>
            <div className='flex justify-between items-center py-2'>
                <p>
                    <span className='text-indigo-600 font-semibold text-xs  group-hover:text-white'>created on: </span>
                    <span className='text-indigo-600 text-xs  group-hover:text-white'>{date}</span>
                </p>
                <div className='font-semibold text-indigo-500 text-xl'>
                    <i onClick={() => editTodo(id)} className="fa-solid fa-square-pen cursor-pointer  px-5 group-hover:text-white"></i>
                    <i onClick={() => deleteTodo(id)} className="fa-solid fa-trash-can  cursor-pointer group-hover:text-white"></i>
                </div>
            </div>
        </div>
    )
}

export default Card;