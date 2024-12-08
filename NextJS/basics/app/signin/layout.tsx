export default function({children}: {
    children: React.ReactNode
}){
    return <div>
        <div className="border-b p-2 text-center text-white bg-black">
            Get Premium
        </div>
        {children}
    </div>
}