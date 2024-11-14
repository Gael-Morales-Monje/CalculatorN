import { useEffect, useState } from "react";
import CalculatorNav from "./CalculatorNav";
import CalculatorMain from "./CalculatorMain";

const Calculator = ({ name }) => {
    const [resert, setResert] = useState(0)
    const Save = () => {
        setResert(resert+1)
    }

    const estilos = {
        main:{
            background:JSON.parse(localStorage.getItem(name)).bg,
            color:JSON.parse(localStorage.getItem(name)).bgText
        },
        calculatorMain:{
            background:JSON.parse(localStorage.getItem(name)).calculator,
        }
    }

    return(
        <>
            
            <div style={estilos.main} className={`w-[100vw] h-auto text-white `}>
                <CalculatorNav user={name} save={Save}/>
                <CalculatorMain style={estilos.calculatorMain} user={name}/>
            </div>
        </>
    )
};

export default Calculator