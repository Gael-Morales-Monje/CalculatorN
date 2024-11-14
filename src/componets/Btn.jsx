import { useState } from "react"
import { MathComponent } from "mathjax-react"

const Btn = ({ fx,name,user }) => {
    const [hovered, setHovered] = useState(false);
    const [type, settype] = useState(false)
    const estilo = {
        cursor:'pointer',
        display:'flex',
        borderRadius:'4px',
        background:hovered ? JSON.parse(localStorage.getItem(user)).bgBottomHover : JSON.parse(localStorage.getItem(user)).bgBottom,
        justifyContent:'center',
        alignItems:'center',
        color:'#fff',
        fontSize:'14px',
    };

    return(
        <>
            <div style={estilo}
            onClick={fx}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            ><MathComponent tex={name} /></div>
        </>
        
    )
}

export default Btn