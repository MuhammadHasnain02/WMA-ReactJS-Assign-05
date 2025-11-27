import { useEffect, useState } from "react"


function CardsPage() {
    let [count , setCount] = useState(1)

    useEffect(() => {
        
    } , [])


    return (
        
        <div>
            <h1>Counter App</h1>
            <button>-</button>
            <p>{count}</p>
            <button>+</button>
        </div>

    )

}


export default CardsPage

{/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <h2 className="text-2xl font-semibold mb-2">Card One</h2>
        <p className="text-gray-600">This card describes the first feature.</p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <h2 className="text-2xl font-semibold mb-2">Card Two</h2>
        <p className="text-gray-600">This card describes the second feature.</p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <h2 className="text-2xl font-semibold mb-2">Card Three</h2>
        <p className="text-gray-600">This card describes the third feature.</p>
    </div>

</div> */}