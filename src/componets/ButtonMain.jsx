const ButtonMain = ({ fx,fx2,fx3,fx4,click }) => {
    return(
        <>
            <button type='button' onClick={() => click(fx)} className=" buttonsText flex justify-center items-center bg-gray-500 text-white w-[90%] h-[90%] place-self-center rounded hover:bg-gray-600">{fx}</button>
            <button type='button' onClick={() => click(fx2)} className=" buttonsText flex justify-center items-center bg-gray-500 text-white w-[90%] h-[90%] place-self-center rounded hover:bg-gray-600">{fx2}</button>
            <button type='button' onClick={() => click(fx3)} className=" buttonsText flex justify-center items-center bg-gray-500 text-white w-[90%] h-[90%] place-self-center rounded hover:bg-gray-600">{fx3}</button>
            <button type='button' onClick={() => click(fx4)} className=" buttonsText flex justify-center items-center bg-gray-500 text-white w-[90%] h-[90%] place-self-center rounded hover:bg-gray-600">{fx4}</button>
        </>
    )
}

export default ButtonMain