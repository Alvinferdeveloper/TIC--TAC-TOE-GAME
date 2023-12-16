
export default function SquareChildren({children,index,handleClickOnSquare,active}){

    return (
        <div
        className={`border-2 border-white border-h h-full w-full rounded-2xl flex justify-center cursor-pointer items-center text-6xl text-white ${active && "bg-black"} hover:border-yellow-300`}   
        onClick={()=>handleClickOnSquare(index)}
        >
            {children}
        </div>
    )
}