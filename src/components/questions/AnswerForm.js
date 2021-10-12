import { Fragment } from "react"
import useInput from "../../hooks/use-input"

const AnswerForm = (props) => {
    const [ enteredAnswer, answerIsValid, answerIsInvalid, setEnteredAnswer, setAnswerIsTouched, resetAnswer, onSubmit ] = useInput(input => input.trim() !== '')
    
    const submitHandler = (event) => {
        event.preventDefault()
        onSubmit()
        if (!answerIsValid) return;
        props.onSubmit({
            id: props.id,
            answer: enteredAnswer
        })
        resetAnswer()
    }

    return (
        <Fragment>
            <form onSubmit={submitHandler} className="form">
                <input className={ `${answerIsInvalid && "error"}` } value={enteredAnswer} onChange={setEnteredAnswer} onBlur={setAnswerIsTouched} />
                <button type="submit">Submit</button>
            </form>
            { answerIsInvalid && <span className="error-msg">Enter an answer.</span> }
        </Fragment>
    )
}

export default AnswerForm;