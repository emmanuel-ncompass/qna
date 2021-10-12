import { useState } from "react";


const useInput = (validator) => {
    const [enteredInput, setEnteredInput] = useState(''),
        [inputIsTouched, setInputIsTouched] = useState(false)

    
    const setInputHandler = (event) => {
        setEnteredInput(event.target.value)
    }

    const setIsTouchedHandler = () => {
        setInputIsTouched(true)
    }

    const reset = () => {
        setEnteredInput('')
        setInputIsTouched(false)
    }

    const onSubmit = () => {
        setInputIsTouched(true)
    } 

    const isValid = validator(enteredInput),
        hasError = !isValid && inputIsTouched
    

    return [ enteredInput, isValid, hasError, setInputHandler, setIsTouchedHandler, reset, onSubmit ]
}

export default useInput;