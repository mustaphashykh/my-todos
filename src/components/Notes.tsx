import { useSelector } from "react-redux";
import Card from "./Card";
import { RootState } from "../Store";
import React from "react";

const Notes: React.FC = () => {
    const allTodos = useSelector((state: RootState) => state.allTodos)
    return (
        <div className="lg:shadow-md rounded">
            <hr className="shadow" />
            <h1 className="text-center text-3xl md:text-4xl font-semibold text-indigo-600 py-5">Todos</h1>
            {
                allTodos.length > 0 ?
                    <div className="px-5 py-5 lg:grid lg:grid-cols-2">
                        {
                            allTodos.map((item: { title: string, des: string, date: string }, index) => {
                                return <Card key={index} title={item.title} des={item.des} date={item.date} id={index} />
                            })
                        }
                    </div>
                    :
                    <p className="text-center text-2xl md:text-3xl font-semibold text-indigo-600 py-5">nothing  to show</p>
            }
        </div>
    )
}

export default Notes;