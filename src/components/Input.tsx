import { ChangeEvent, FormEvent } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState, todosAction } from "../Store";

export default function Input() {
    const dispatch = useDispatch();

    const title = useSelector((state: RootState) => state.title)

    const des = useSelector((state: RootState) => state.des)

    const takeValues = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(todosAction.takeValues({ name: event.target.name, value: event.target.value }))
    }

    const addTodo = (event: FormEvent): void => {
        event.preventDefault();
        dispatch(todosAction.addTodo())
        setTimeout(() => {
            dispatch(todosAction.hideProgress())
        }, 2000);
    }
    return (
        <form className="shrink-0 md:shadow-xl space-y-8 rounded-md transition delay-75">
            <h1 className="text-center text-3xl font-semibold md:text-4xl text-indigo-600 pt-8">What Todo</h1>
            <div className="relative px-10">
                <input onChange={takeValues} className='peer w-full border-b-2 border-b-indigo-400 focus:border-b-indigo-600 focus:outline-none py-2 text-indigo-600 placeholder-transparent' placeholder="title for your todo..." value={title} type="text" name="title" />
                <label className='absolute left-9 -top-5 text-xl text-indigo-600 transition-all duration-300 peer-placeholder-shown:top-2  peer-placeholder-shown:font-semibold peer-focus:-top-5 peer-focus:text-indigo-600 peer-focus:text-xl peer-focus:font-semibold'>title</label>
            </div>
            <div className="flex flex-col items-start px-10">
                <label className='text-xl font-semibold text-indigo-600 pb-2'>description</label>
                <textarea onChange={takeValues} name="des" value={des} rows={4} placeholder="how to do....." className='w-full border-2 border-indigo-400 focus:border-b-indigo-600 focus:outline-none py-2 text-indigo-600 placeholder-indigo-400 rounded px-4'/>
            </div>
            <div className="px-10 pb-8 ">
                <button type="button" disabled={!(title.length > 0 && des.length > 0)} className="w-full bg-indigo-600 rounded text-white font-semibold text-xl py-2 mb-5 hover:shadow-md hover:bg-indigo-500 active:ring-1 active:ring-indigo-500 active:ring-offset-2 hover:-translate-y-1 transform transition" onClick={addTodo}>Add</button>
            </div>
        </form>
    )
}
