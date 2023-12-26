import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
function App() {
  return (
    <div className="App">
      <Greet name="Ayush Prop">
        <p>This is children</p>
      </Greet>
      <Greet name="Shivam Prop">
        <button>Action</button>
      </Greet>
      <Greet name="Abhyuday Prop" />
      <Welcome name="Ayush Class Prop"/>
      <Welcome name="Shivam Class Prop"/>
      <Welcome name="Abhyuday Class Prop"/>
      <Message />
      {/* <Hello /> */}
    </div>
  );
}

export default App;
