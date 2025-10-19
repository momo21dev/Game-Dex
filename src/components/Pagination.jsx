import { useState } from "react"

export default function Pagination({ setUrl, data }) {
    const [page, setPage] = useState(1)
    return (
        <>
            <div className="flex items-center justify-center gap-4 sm:gap-6 text-white text-base sm:text-xl mt-6 flex-wrap">
                <button
                    className="bg-white text-black font-semibold px-4 sm:px-5 py-2 rounded-full transition-all duration-300 hover:bg-purple-500 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
                    disabled={data.previous === null}
                    onClick={() => {
                        if (data.previous !== null) {
                            setUrl(data.previous)
                            setPage(page - 1)
                        }
                    }}
                >
                    Previous
                </button>

                <p className="bg-white text-black font-bold px-5 sm:px-6 py-2 sm:py-3 rounded-full shadow-md select-none">
                    {page}
                </p>

                <button
                    className="bg-white text-black font-semibold px-4 sm:px-5 py-2 rounded-full transition-all duration-300 hover:bg-purple-500 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
                    disabled={data.next === null}
                    onClick={() => {
                        if (data.next !== null) {
                            setUrl(data.next)
                            setPage(page + 1)
                        }
                    }}
                >
                    Next
                </button>
            </div>
        </>

    )
}