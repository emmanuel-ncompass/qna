import { useDispatch } from "react-redux";
import useInput from "../../hooks/use-input";
import { questionActions } from "../../store/question-slice";

const NewQuestion = () => {
    const [ enteredQuestion, questionIsValid, questionIsInvalid, setEnteredQuestion, setQuestionIsTouched, resetQuestion, onSubmit ] = useInput(input => input.trim() !== '')
    const dispatch = useDispatch()

    const submitHandler = (event) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "qna", question: enteredQuestion })
          })
            .then(() => console.log("Success!"))
            .catch(error => console.error(error));
    
        event.preventDefault();
        if (!questionIsValid) return;
        onSubmit()
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