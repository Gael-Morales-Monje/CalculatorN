import { useState } from "react";

import CustomColor from "./CustomColor";

const ColorNav = ({ name,fx,Actualizar }) => {
    const [user, setUser] = useState(name)
    const [buttonbg, setButtonbg] = useState(false)
    const [buttonheader, setButtonheader] = useState(false)
    const [buttonBgText, setButtonBgText] = useState(false)
    const [buttonBgButton, setButtonBgButton] = useState(false)
    const [buttonBgButtonHover, setButtonBgButtonHover] = useState(false)
    const [buttonHeaderText, setButtonHeaderText] = useState(false)
    const Guardar = () =>{
        let USER = JSON.parse(localStorage.getItem(name))
        USER.bg = document.getElementById('color').value
        USER.text = document.getElementById('text').value
        console.log(USER)
        localStorage.setItem(USER.name,JSON.stringify(USER))
        Actualizar()
    }
    const estilos = {
        bg:{
            background:JSON.parse(localStorage.getItem(user)).bg
        },
        text:{
            background:JSON.parse(localStorage.getItem(user)).bg,
            color:JSON.parse(localStorage.getItem(user)).bgText
        },
        header:{
            background:JSON.parse(localStorage.getItem(user)).header,
        },
        headerText:{
            background:JSON.parse(localStorage.getItem(user)).header,
            color:JSON.parse(localStorage.getItem(user)).headerText
        },
        bgBottom:{
            background:JSON.parse(localStorage.getItem(user)).bgBottom
        },
        bgBottomHover:{
            background:JSON.parse(localStorage.getItem(user)).bgBottomHover
        }
    }

    const SaveBG = () => {
        setButtonbg(!buttonbg)
        let USER = JSON.parse(localStorage.getItem(name))
        USER.bg = document.getElementById('Fondo').value
        localStorage.setItem(USER.name,JSON.stringify(USER))
        Actualizar()
    }
    const SaveBGText = () => {
        setButtonBgText(!buttonBgText)
        let USER = JSON.parse(localStorage.getItem(name))
        USER.bgText = document.getElementById('bgText-text').value
        localStorage.setItem(USER.name,JSON.stringify(USER))
        Actualizar()
    }
    const SaveHeader = () => {
        setButtonheader(!buttonheader)
        let USER = JSON.parse(localStorage.getItem(name))
        USER.header = document.getElementById('Header').value
        localStorage.setItem(USER.name,JSON.stringify(USER))
        Actualizar()
    }
    const SaveHeaderText = () => {
        setButtonHeaderText(!buttonHeaderText)
        let USER = JSON.parse(localStorage.getItem(name))
        USER.headerText = document.getElementById('headerText-text').value
        localStorage.setItem(USER.name,JSON.stringify(USER))
        Actualizar()
    }
    const SaveBgButton = () => {
        setButtonBgButton(!buttonBgButton)
        let USER = JSON.parse(localStorage.getItem(name))
        USER.bgBottom = document.getElementById('Botones').value
        localStorage.setItem(USER.name,JSON.stringify(USER))
        Actualizar()
    }
    const SaveBgButtonHover = () => {
        setButtonBgButtonHover(!buttonBgButtonHover)
        let USER = JSON.parse(localStorage.getItem(name))
        USER.bgBottomHover = document.getElementById('BotonesHover').value
        localStorage.setItem(USER.name,JSON.stringify(USER))
        Actualizar()
    }
    const reset = () => {
        setButtonbg(false)
        setButtonBgText(false)
        setButtonheader(false)
        setButtonHeaderText(false)
        setButtonBgButton(false)
        setButtonBgButtonHover(false)
    }
    const Default = () => {
        let USER = JSON.parse(localStorage.getItem(name))
        USER.bg = '#000'
        USER.bgText = '#fff'
        USER.header = '#000'
        USER.headerText = '#fff'
        USER.bgBottom = '#555'
        USER.bgBottomHover = '#666'
        localStorage.setItem(USER.name,JSON.stringify(USER))
        Actualizar()
    }
    return(
        <>
            <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="w-[80%] h-[60vh] bg-white p-2 rounded select-none overflow-y-auto">
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] ">
                        <div className="border-2 border-black grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] mr-2">
                            <CustomColor estilo={estilos.bg} funcion={SaveBG} change={buttonbg} nombre={'Fondo'} type={'bg'}/>
                            <CustomColor estilo={estilos.text} funcion={SaveBGText} change={buttonBgText} nombre={'bgText'} type={'text'}/>
                        </div>
                        <div className="border-2 border-black grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] mr-2">
                            <CustomColor estilo={estilos.header} funcion={SaveHeader} change={buttonheader} nombre={'Header'} type={'bg'}/>
                            <CustomColor estilo={estilos.headerText} funcion={SaveHeaderText} change={buttonHeaderText} nombre={'headerText'} type={'text'}/>
                        </div>
                        <div className="border-2 border-black grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] mr-2">
                            <CustomColor estilo={estilos.bgBottom} funcion={SaveBgButton} change={buttonBgButton} nombre={'Botones'} type={'bg'}/>
                            <CustomColor estilo={estilos.bgBottomHover} funcion={SaveBgButtonHover} change={buttonBgButtonHover} nombre={'btnHover'} type={'bg'}/>
                        </div>
                    </div>
                    <div className="text-right">
                        <div onClick={fx} className="cursor-pointer inline-block mr-2 px-2 py-1 bg-red-500 hover:bg-red-700 rounded mt-6">volver</div>
                        <div onClick={reset} className="cursor-pointer inline-block mr-2 px-2 py-1 bg-yellow-500 hover:bg-yellow-700 rounded mt-6">Cambiar</div> 
                    </div>
                    <div className="text-left">
                        <div onClick={Default} className="cursor-pointer inline-block mr-2 px-2 py-1 bg-emerald-600 hover:bg-emerald-800 rounded mt-6">Valores por defecto</div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ColorNav