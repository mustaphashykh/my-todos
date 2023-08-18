import { useSelector } from "react-redux"
import { RootState } from "../Store"

export default function Header() {
    const state = useSelector((state: RootState) => state.state)
    const message = useSelector((state: RootState) => state.message)
    const isShow = useSelector((state: RootState) => state.isShow)
    return (
        <>
            <div className="flex flex-row flex-shrink-0 items-center bg-indigo-600 text-slate-100 py-3 shadow-lg sticky top-0 z-10">
                <i className="fa-solid fa-pen text-2xl p-4 md:text-4xl"></i>
                <div>
                    <h1 className="text-3xl font-semibold md:text-4xl">Todo</h1>
                    <h6 className="text-sm font-semibold md:text-xl">Take down your most essentials to dos.</h6>
                </div>
            </div>
            {
                isShow ?
                    <div className={state === 'uploaded' ? "bg-green-200 px-3 py-2 text-lg transition-all font-semibold absolute w-full top-15 italic text-gray-700"
                        : "bg-red-200 transition-all px-3 py-2 text-lg font-semibold italic text-gray-700 absolute w-full top-15"}>
                        {message}
                    </div>
                    : ''
            }
        </>
    )
}