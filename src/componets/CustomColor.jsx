import ButtonSave from "./ButtonSave";

const CustomColor = ({ estilo,funcion,change,nombre,type }) => {
    return(
        <>
            {type == "bg" && (
            <div className="inline-block mx-6 mb-3 border-2 border-transparent">
                <label className="text-black">{nombre}:</label>
                <input type="color" id={nombre}/>
                <div className="mb-1">
                    <label className="text-black">color actual</label>
                    <div style={estilo} className="w-10 h-10 border-2 border-black"></div>
                </div>
                {!change && <div onClick={funcion} className="inline px-2 py-1 rounded bg-blue-500 hover:bg-blue-700 text-black cursor-pointer">save</div>}
                {change && <ButtonSave />}
            </div>)}
            
            {type == "text" && (
            <div className="inline-block mx-6 mb-3">
                <label className="text-black">{nombre}:</label>
                <input type="color" id={`${nombre}-text`}/>
                <div className="mb-4">
                    <label className="block text-black mb-3">color actual</label>
                    <div style={estilo} className="inline p-2 border-2 border-black">Lorem</div>
                </div>
                {!change && <div onClick={funcion} className="inline px-2 py-1 rounded bg-blue-500 hover:bg-blue-700 text-black cursor-pointer">save</div>}
                {change && <ButtonSave />}
            </div>)}
        </>
    )
}


export default CustomColor