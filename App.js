import logo from './logo.svg';
import './App.css';
import Item from './components/Item'; 
import ItemDate from './components/ItemDate';
function App() {
  return (
    <div>
<Item name="nirma" ></Item>
<ItemDate day="20" month="June" year="1998"></ItemDate>

<Item name="Surfexcel" ></Item>
<ItemDate day="21" month="July" year="1999"></ItemDate>

<Item name="Tide" ></Item>
<ItemDate day="22" month="September" year="2000"></ItemDate>
    <div className="App">
      <h1>Hello Jee</h1>
    </div>
    </div>
    
  );
}

export default App;
