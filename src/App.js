import './App.css';
import Filters from './components/questions/Filters';
import NewQuestion from './components/questions/NewQuestion';
import QuestionList from './components/questions/QuestionList';

function App() {
  return (
    <div className="App">
      <NewQuestion />
      <Filters />
      <QuestionList />
    </div>
  );
}

export default App;
