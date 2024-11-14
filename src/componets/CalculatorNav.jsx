import { useEffect, useState } from "react";
import ColorNav from "./ColorNav";

const CalculatorNav = ({user,save}) => {
    const [navcolor, setNavcolor] = useState(false)
    const [informacion, setInformacion] = useState(false)
    const [resolucion, setResolucion] = useState(false)
    const ChangeColor = () => {
        setNavcolor(!navcolor)
    }
    const info = () => {
        setInformacion(!informacion)
    }
    const estilos = {
        header:{
            background:JSON.parse(localStorage.getItem(user)).header,
            color:JSON.parse(localStorage.getItem(user)).headerText
        }
    }

    return(
        <>
            <header style={estilos.header} className="p-2  justify-between items-center flex select-none" id="box">
                <h1 className="text-2xl font-bold inline-block">welcome <b className="text-red-400 text-[1rem]">{JSON.parse(localStorage.getItem(user)).name}</b></h1>
                <div className="inline-block mr-2">
                    <ul className=" text-white">
                        <li onClick={ChangeColor} className="inline-block mx-1 px-2 py-1 bg-cyan-400 hover:bg-cyan-500 text-black rounded cursor-pointer" >color</li>
                        {navcolor && <ColorNav name={user} fx={ChangeColor} Actualizar={save}/>}
                        <li onClick={info} className="inline-block mx-1 px-3 py-1 bg-transparent border-[2px] border-white rounded hover:bg-white hover:bg-opacity-25 cursor-pointer" >?</li>
                        {informacion && (
                            <div className="fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-50 flex justify-center items-center">
                                <div className=" bg-neutral-500 p-5 overflow-y-auto info">
                                    <p className="text-white w-[60%] mx-auto">
                                        Calculadora-N con mas potencia a comparacion de mi anterior calculadora.
                                        <br />
                                        <br />
                                        <b>
                                            Soporta lo siguiente:
                                            <br />
                                            -Algebra
                                            <br />
                                            -Integrales indefinidas
                                            <br />
                                            -Derivadas indefinidas
                                            <br />
                                            -Aritmetica
                                        </b>
                                        <br />
                                        <br />
                                        Pagina creada con React y Taildwind
                                        <br />
                                        <br />
                                        Version v1.1.0
                                    </p>
                                    <br />
                                    <div className="text-right">
                                        <div onClick={info} className="inline border-[1px] border-white rounded py-1 px-2 cursor-pointer mr-6">Salir</div>
                                        <div onClick={()=>{setResolucion(!resolucion)}} className="inline border-[1px] border-white rounded py-1 px-2 cursor-pointer">Resolucion</div>
                                    </div>
                                    {resolucion && <div>{window.screen.height}px {window.screen.width} px</div>}
                                </div>
                            </div>
                        )}
                        
                    </ul>
                </div>
            </header>
        </>
    )
}


export default CalculatorNav