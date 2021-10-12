import { useDispatch, useSelector } from "react-redux";
import { questionActions } from "../../store/question-slice";
import QuestionItem from "./QuestionItem";

const sortQuestionsBy = (questions, type) => {
    return [...questions].sort((questionA, questionB) => {
        if (type === 'time') {
            return questionA.timestamp > questionB.timestamp ? -1 : 1;
        } else {
            return questionA.votes < questionB.votes ? 1 : -1;
        }
    });
}


const QuestionList = () => {
    const questions = useSelector(state => state.questions.questions)
    const bookmarked = useSelector(state => state.questions.bookmarked)
    const sortBy = useSelector(state => state.ui.sortQuestionsBy)
    const filterByBookmark = useSelector(state => state.ui.filterByBookmark)

    const dispatch = useDispatch()
    
    let sortedQuestions = sortQuestionsBy(questions, sortBy)
    if (filterByBookmark) 
        sortedQuestions = sortedQuestions.filter(question => bookmarked.includes(question.id))

    const onUpVoteHandler = (questionId) => {
        dispatch(questionActions.upVote(questionId))
    }
    
    const onDownVoteHandler = (questionId) => {
        dispatch(questionActions.downVote(questionId))
    }

    const onAnswerHandler = (answer) => {
        dispatch(questionActions.addAnswer(answer))
    }

    const onBookmarkHandler = (questionId) => {
        dispatch(questionActions.toggleBookmark(questionId))
    }

    return (
        <div>
            { sortedQuestions.map(question => 
                <QuestionItem key={question.id} 
                    data={question} 
                    onUpVote={onUpVoteHandler} 
                    onDownVote={onDownVoteHandler} 
                    onAnswer={onAnswerHandler} 
                    onBookmark={onBookmarkHandler}
                    bookmarked={bookmarked} />
            ) }
        </div>
    );
}

export default QuestionList;