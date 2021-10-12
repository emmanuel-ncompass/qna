import classes from './QuestionItem.module.css';
import AnswerForm from "./AnswerForm";

const QuestionItem = (props) => {
    const { id, question, answer, votes, timestamp } = props.data;
    const isBookmarked = props.bookmarked.includes(id)

    const upVote = () => {props.onUpVote(id)}
    const downVote = () => {props.onDownVote(id)}
    const bookmark = () => {props.onBookmark(id)}

    return (
        <div className={classes.question}>
            <div className={classes.votes}>
                <button onClick={upVote}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                </button>
                <p>{ votes }</p>
                <button onClick={downVote}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
            <div className={classes.content}>
                <p>{ question }</p>
                { !answer && <AnswerForm id={id} onSubmit={props.onAnswer} /> }
                { answer && <p className={classes.answer}>{ answer }</p> }
            </div>
            <span className={`${classes.bookmark} ${isBookmarked && classes.active}`} onClick={bookmark}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
            </span>
            <div className={classes.timestamp}>{ timestamp }</div>
        </div>
    )
}

export default QuestionItem;