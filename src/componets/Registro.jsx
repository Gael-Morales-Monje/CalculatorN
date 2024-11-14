import { useState } from "react";

const Registro = ({ fx }) => {
    const [pass, setPass] = useState(false)
    const [user, setUser] = useState(false)
    const [color,setColor] = useState(false)
    const registro = (fx) => {
        setPass(false)
        setUser(false)
        setColor(false)
        let USER = {
            name:'',
            password:'',
            header:'#000',
            headerText:'#fff',
            bg:'#000',
            bgText:'#fff',
            footer:'#000',
            footerText:'#fff',
            bgText:'#fff',
            calculator:'#aaa',
            calculatorText:"#000",
            bgBottom:"#555",
            bgBottomHover:"#666",
        }
        let name = document.getElementById('user').value
        let auth = localStorage.getItem(name)
        if (auth == null || auth.name == " " || auth.name == '') {
            USER.name = name
            USER.password = document.getElementById('password').value
            if (USER.password.length >= 5 && USER.password.length <= 16) {
                localStorage.setItem(name,JSON.stringify(USER))
                setColor(true)
                setTimeout(() => {
                    fx()
                }, 200);
            } else {
                setPass(true)
            }
        } else {
            setUser(true)
        }
    }
    const click = () => {
        registro(fx)
    }

    
    return(
        <>
            <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 flex justify-center items-center">
                <form  className="interfaz-log  rounded bg-gray-300 select-none">
                    <h2 className="block text-center text-black text-log font-bold">Registro</h2>
                    <div>
                        <label className="block label-log w-[90%] mx-auto mb-2">Usuario:
                        {user && <p className="w-[100%] text-center mx-auto text-red-500"><b>Usuario ya exixtente</b></p>}
                        </label>
                        <div className="text-center">
                            <input id="user" className="input-log inline-block text-black" type="text" placeholder="nombre" />
                        </div>
                    </div>
                    <div>
                        <label className="block label-log  mx-auto w-[90%] mb-2">
                            Contraseña: 
                        {pass && <p className="w-[100%] text-center mx-auto text-red-500"><b>contraseña no valida</b></p>}
                        </label>
                        <div className="text-center">
                            <input id="password" className="input-log inline-block text-black" type="text" placeholder="password" />
                        </div>
                    </div>
                    <div className="flex justify-evenly mx-auto mt-3">
                        {!color && <div onClick={click} className="rounded button-log inline-block bg-blue-600 hover:bg-blue-800 cursor-pointer text-center">Registrarse</div>}
                        {color && <div onClick={click} className="rounded button-log inline-block bg-green-600 cursor-default text-center">Registrarse</div>}
                        <div onClick={fx} className="rounded button-log inline-block bg-red-600 hover:bg-red-800 cursor-pointer text-center">Cancelar</div>
                    </div>
                </form>
            </div>
        </>
    )
};

export default Registro