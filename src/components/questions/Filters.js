import classes from './Filters.module.css';
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const Filters = () => {
    const isFilteredByBookmark = useSelector(state => state.ui.filterByBookmark)
    const dispatch = useDispatch();

    const changeSortHandler = (event) => {
        dispatch(uiActions.sortQuestionsBy(event.target.value))
    }

    const setFilterHandler = () => {
        dispatch(uiActions.filterByBookmark())
    }

    return (
        <div className={classes.filters}>
            <div onChange={changeSortHandler} className={classes.sort}>
                <span>Sort By: </span>
                <div>
                    <input type="radio" name="sortBy" value="votes" /> Vote   
                    <input type="radio" name="sortBy" value="time" /> Time   
                </div>
            </div>
            <button onClick={setFilterHandler} className={`ring-orange ${isFilteredByBookmark && classes.active}`}>Bookmarked</button>
        </div>
    );
}

export default Filters;