import {createStore} from "redux"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import './App.css';
import {Provider} from "react-redux";

const initialValue = {
  items: []
};

const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {...state, items: [...state.items, action.payload]}
    case 'REMOVE_ITEM':
      return {...state, items: state.items.filter(({item}) => item !== action.payload)}
    default:
      return state
  }
}
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoInput />
        <TodoList />
      </div>
    </Provider>
  )
}

export default App;
