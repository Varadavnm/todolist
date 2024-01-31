
import './App.css';
import Todolist from './components/Todolist';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Routing from './components/Routing'
import NewTodo from './components/NewTodo';

function App() {
  return (
    <div className="App">
      <Todolist />
      {/* <Routes>
        <Route path='/about' element={ Routing } />
      </Routes> */}
      <NewTodo />
    </div>
  );
  
}

export default App;
