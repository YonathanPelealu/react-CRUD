import logo from './logo.svg';
import './App.css';
import FormInput from './components/FormInput';
import Button from './components/Button';
import TodoItem from './components/ListItem'
function App() {
  return (
      <div className='app'>
        <div className="logo">
          <img src={logo}/>
        </div>
      <div className='list'>
        <TodoItem/>
      </div>
      <div className='input-form'>
        <FormInput/>
      </div>
      </div>
  );
}

export default App;
