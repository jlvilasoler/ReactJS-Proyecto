import { useState } from "react"
import "/src/components/ItemListContainer/Clicker.css"

export const Clicker = () => {
    const [counter, setCounter] = useState(0)
    console.log(counter)

const sumar = () => {
    setCounter( counter+1 )
}

const restar = () => {
    setCounter( counter-1 )
}

const reset = () => {
    setCounter( 0 )
}

    return (
        <div className="boton">
        <button className="boton" onClick={sumar}> ➕ </button>
        <button className="boton" onClick={restar}> ➖ </button>
        <button className="boton" onClick={reset}> RESET </button>
        <p>{counter}</p>
        </div>
    )
}
