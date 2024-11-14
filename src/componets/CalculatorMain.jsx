import algebrite from "algebrite"
import mathJs from "math.js"
import { useState } from "react"
import { MathComponent } from "mathjax-react"
import Btn from "./Btn"
import { Matrix, evaluate } from "mathjs"

const CalculatorMain = ({ style,user }) => {
    const [input,setInput] = useState('')
    const [input2,setInput2] = useState('')
    const [temporal, setTemporal] = useState('')
    const [changeLaTeX,setChangeLaTeX] = useState(false)
    const [dx,setDx] = useState('')
    const LaTeX = () => {
        setChangeLaTeX(!changeLaTeX)
    }
    const style1 = {
        Btn:{
            
            background:JSON.parse(localStorage.getItem(user)).bgBottom,
            ':hover':{
                background:JSON.parse(localStorage.getItem(user)).bgBottomHover,
            }
        },
        latex:{
            background:changeLaTeX ? 'green':'red',
            translate:changeLaTeX ? '1.6rem':'0'
        }
    }
    const Click = (value) => {
        if(value == 'c'){
            setInput('');
            const resultadoDecimal = algebrite.run('3^(1/2)').toString();
            console.log(`La raíz cuadrada de 3 (decimal) es: ${eval(resultadoDecimal.replace('^','**'))}`);
        } else if(value == '<-'){
            setInput(input.substring(0, input.length - 1))
        } else if (value == '=') {
            if (input.split(' ')[0] == 'dx') {
                let du = input.split(' ')
                setDx(algebrite.run(`d(${algebrite.run(du[1])})`))
                setInput(`${algebrite.run(`d(${algebrite.run(du[1])})`)}`)
            } else if (input.split(' ')[0] == 'integral') {
                let du = input.split(' ')
                setInput(`${algebrite.run(`integral(${algebrite.run(du[1])})`)}`)
            }else if (input.split(' ')[0] == 'simplify') {
                let du = input.split(' ')
                setInput(`${algebrite.run(`simplify(${algebrite.run(du[1])})`)}`)
            }else if (input.split(' ')[0] == 'algebra') {
                let du = input.split(' ')
                let ti = du[1].split('~=~')
                ti[1] = algebrite.run(`-1*(${ti[1]})`)
                setInput(`${algebrite.run(`nroots(${algebrite.run(`(${ti[0]})+(${ti[1]})`)})`)}`)
            }
            else {
                
                if(input.indexOf('x') >= 0 ||
                input.indexOf('y') >= 0 ||
                input.indexOf('z') >= 0
                ){
                    setInput(algebrite.run(`${input}`));
                } else {
                    setInput(evaluate(`${input}`));
                }
            
            }
        } else {
            setInput((prevInput) => prevInput + value);
        }    
    };
    return(
        <>
            <div className="min-h-[100vh] jua">
                <div style={style} className="w-[55%] bg-white mt-8 p-2 calmedia rounded">
                    <form className="flex justify-center">
                        <input type="text" className="w-[90%] h-[2rem] text-black rounded" value={input} readOnly/>
                    </form>
                    <div className="w-[100%] grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] auto-rows-[max-content] gap-3 mt-3 select-none">
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(45px,1fr))] auto-rows-[50px] gap-3">
                            <div className="a grid grid-cols-3 auto-rows-[50px] gap-3">
                                <Btn fx={()=>{Click('1')}} name={'1'} user={user}/>
                                <Btn fx={()=>{Click('2')}} name={'2'} user={user}/>
                                <Btn fx={()=>{Click('3')}} name={'3'} user={user}/>
                                <Btn fx={()=>{Click('4')}} name={'4'} user={user}/>
                                <Btn fx={()=>{Click('5')}} name={'5'} user={user}/>
                                <Btn fx={()=>{Click('6')}} name={'6'} user={user}/>
                                <Btn fx={()=>{Click('7')}} name={'7'} user={user}/>
                                <Btn fx={()=>{Click('8')}} name={'8'} user={user}/>
                                <Btn fx={()=>{Click('9')}} name={'9'} user={user}/>
                                <Btn fx={()=>{Click('<-')}} name={'<-'} user={user}/>
                                <Btn fx={()=>{Click('0')}} name={'0'} user={user}/>
                                <Btn fx={()=>{Click('c')}} name={'c'} user={user}/>
                            </div>
                            <Btn fx={()=>{Click('.')}} name={'.'} user={user}/>
                            <Btn fx={()=>{Click('+')}} name={'+'} user={user}/>
                            <Btn fx={()=>{Click('-')}} name={'-'} user={user}/>
                            <Btn fx={()=>{Click('*')}} name={`${String.raw`\times`}`} user={user}/>
                            <Btn fx={()=>{Click('/')}} name={`${String.raw`\div`}`} user={user}/>
                            <Btn fx={()=>{Click('^')}} name={`${String.raw`x^n`}`} user={user}/>
                            <Btn fx={()=>{Click('sqrt(')}} name={`${String.raw`\sqrt{x}`}`} user={user}/>

                            <Btn fx={()=>{Click('=')}} name={'EXE'} user={user}/>
                        </div>
                        <div className="grid grid-cols-[repeat(auto-fill,minmax(45px,1fr))] auto-rows-[50px] gap-[9px] bg-gray-500 rounded p-[9px]">
                            <Btn fx={()=>{Click('(')}} name={'('} user={user}/>
                            <Btn fx={()=>{Click(')')}} name={')'} user={user}/>
                            <Btn fx={()=>{Click('dx ')}} name={`${String.raw`\frac{dy}{dx}`}`} user={user}/>
                            <Btn fx={()=>{Click('integral ')}} name={`${String.raw`\int_ \,dx\ `}`} user={user}/>
                            <Btn fx={()=>{Click('algebra ')}} name={'algebra'} user={user}/>
                            <Btn fx={()=>{Click('3.1416')}} name={`${String.raw`\pi`}`} user={user}/>
                            <Btn fx={()=>{Click('2.7182')}} name={`${String.raw`e`}`} user={user}/>
                            <Btn fx={()=>{Click('x')}} name={'x'} user={user}/>
                            <Btn fx={()=>{Click('y')}} name={'y'} user={user}/>
                            <Btn fx={()=>{Click('z')}} name={'z'} user={user}/>
                            <Btn fx={()=>{Click(' deg')}} name={'deg'} user={user}/>
                            <Btn fx={()=>{Click('sin')}} name={'sen'} user={user}/>
                            <Btn fx={()=>{Click('cos')}} name={'cos'} user={user}/>
                            <Btn fx={()=>{Click('tan')}} name={'tan'} user={user}/>
                            {/* <Btn fx={()=>{Click('atan')}} name={'atan'} user={user}/> */}
                            <Btn fx={()=>{Click('~=~')}} name={'='} user={user}/>
                        </div>
                    </div>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] mt-5 text-black"><p className="text-wrap">Para usar las funciones trigonometricas en grados deberas usar la tecla <b>deg</b> despues del numero un ejemplo {`sin(30 deg)`}, si deseas el resultado usando radianes no uses <b>deg</b> un ejemplo {`sin(30)`}</p></div>
                </div>
            </div>
        </>
    )
}


export default CalculatorMain