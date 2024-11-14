import { useState } from "react"
import Registro from "./Registro"
import Ingrezar from "./Ingrezar"

const NavBar = ({ fx }) => {
    const [interfaz, setInterfaz] = useState(false)
    const [interfaz2, setInterfaz2] = useState(false)
    const change = () => {
        setInterfaz(!interfaz)
    }
    const change2 = () => {
        setInterfaz2(!interfaz2)
    }

    return(
        <>
            <div className="flex justify-between items-center p-[1vw] select-none">
                <h1 className="title text-white font-bold font-serif cursor-default">Bienvenido a N</h1>
                <nav>
                    <ul className="text-white list-none">
                        <li onClick={change2} className="inline rounded btn cursor-pointer">Iniciar Sesion</li>
                        {interfaz2 && <Ingrezar fx={change2} main={fx}/>}
                        <li onClick={change} className="inline rounded btn border-2 border-white cursor-pointer">Registrarte</li>
                        {interfaz && <Registro fx={change}/>}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NavBar