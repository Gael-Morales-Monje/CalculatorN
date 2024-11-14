import { useState } from "react";

const Ingrezar = ({ fx,main }) => {
    const [auth,setAuth] = useState(false)
    const [color, setColor] = useState(false)
    const ingrezar = (fx,main) => {
        setColor(false)
        setAuth(false)
        let pass = document.getElementById('passwordlog').value
        let user = document.getElementById('userlog')
        let name = document.getElementById('userlog').value
        let USER = JSON.parse(localStorage.getItem(name))
        if(USER == null){
            setAuth(true)
            document.a.userlog.value = ''
            document.a.passwordlog.value = ''
        } else if(USER.password == pass) {
            setColor(true)
            setTimeout(() => {
                main(USER)
            }, 200);
        }
    }
    const click = () => {
        ingrezar(fx,main)
    }
    return(
        <>
            <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 flex justify-center items-center">
                <form name="a" className="interfaz-log bg-gray-300 rounded select-none">
                    <h2 className="block text-center text-black text-log font-bold">Ingresar</h2>
                    <label className="block label-log w-[90%] mx-auto mb-2">Usuario:
                    {auth && <p className="inline-block w-[100%] text-center text-red-500"><b>usuario o contraseña incorrectos</b></p>}
                    </label>
                    <div className="text-center">
                        <input id="userlog" name="userlog" className="inline-block input-log text-black" type="text" placeholder="nombre" />
                    </div>
                    <label className="block label-log w-[90%] mx-auto mb-2">Contraseña:</label>
                    <div className="text-center">
                        <input id="passwordlog" name="passwordlog" className="inline-block input-log text-black" type="text" placeholder="password" />
                    </div>
                    <div className="flex justify-evenly mx-auto mt-3">
                        {!color && <div onClick={click} className="rounded inline-block bg-blue-600 hover:bg-blue-800 button-log cursor-pointer text-center">Ingresar</div>}
                        {color && <div onClick={click} className="rounded inline-block bg-green-600 button-log cursor-default text-center">Ingresar</div>}
                        <div onClick={fx} className="rounded inline-block button-log bg-red-600 hover:bg-red-800 cursor-pointer text-center">Cancelar</div>
                    </div>
                </form>
            </div>
        </>
    )
};

export default Ingrezar