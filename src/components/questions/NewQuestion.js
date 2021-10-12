import { useDispatch } from "react-redux";
import useInput from "../../hooks/use-input";
import { questionActions } from "../../store/question-slice";

const NewQuestion = () => {
    const [ enteredQuestion, questionIsValid, questionIsInvalid, setEnteredQuestion, setQuestionIsTouched, resetQuestion, onSubmit ] = useInput(input => input.trim() !== '')
    const dispatch = useDispatch()

    const submitHandler = (event) => {
        event.preventDefault();
        onSubmit()
        if (!questionIsValid) return;
        dispatch(questionActions.addQuestion(enteredQuestion))
        resetQuestion()
    }

    return (
        <div>
            <h2>Ask a Question</h2>
            <form onSubmit={submitHandler} className="form">                
                <input className={ `${ questionIsInvalid && "error" }` } value={enteredQuestion} onChange={setEnteredQuestion} onBlur={setQuestionIsTouched} />
                <button type="submit">Ask</button>
            </form>
            { questionIsInvalid && <span className="error-msg">Enter a question.</span> }
        </div>
    )
}


export default NewQuestion;