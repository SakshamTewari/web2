"use client"

export function Button({label}){

    function clickHandler(){
        console.log("hello");
    }
    return <>
        <button onClick={clickHandler} type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py2.5 me-2 mb-2">{label}</button>
    </>
}