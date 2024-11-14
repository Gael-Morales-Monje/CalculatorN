import { useState } from "react"
import ButtonMain from "./ButtonMain"

const Main = () => {
    const [input, setInput] = useState('');
    const handleButtonClick = (value) => {
        if(value == 'c'){
            setInput('');
        } else if (value == '=') {
            try {
                setInput(eval(input));
            }  catch (error) {
                setInput('Error');
            }
        } else {
            setInput((prevInput) => prevInput + value);
        }    
    };
    
    return(
        <>
            <div className="Flex mt-[15vh]">
                <form className="calculatem v3 bg-gray-200 rounded text-center select-none">
                    <input type="text" className="buttonsText w-[90%] h-[12%] my-[2.5%] bg-gray-400 outline-none rounded cursor-default" name="panel" value={input} readOnly/>
                    <div className="grid grid-rows-4 grid-cols-4 w-[90%] h-[78%] my-[2.5%] mx-auto  gap-[.4vw]">
                        <ButtonMain fx={'1'} fx2={'2'} fx3={'3'} fx4={'+'} click={handleButtonClick}/>
                        <ButtonMain fx={'4'} fx2={'5'} fx3={'6'} fx4={'-'} click={handleButtonClick}/>
                        <ButtonMain fx={'7'} fx2={'8'} fx3={'9'} fx4={'*'} click={handleButtonClick}/>
                        <ButtonMain fx={'c'} fx2={'0'} fx3={'='} fx4={'/'} click={handleButtonClick}/>
                    </div>
                </form>
                <div className="buttonsText textMain break-all text-gray-300"> Esta es una calculadora basica de prueva, si deseas usar la version completa <b className="text-red-500">Inicia sesion</b> o <b className="text-red-500">Registrate</b> no se requiere correo electronico
                </div>
            </div>
        </>
    )
}

export default Main