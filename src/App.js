import logo from './logo.svg';
import './App.css';
const number = 555;
const singer = {name:'dr asik',job: 'singer'}
const singer1 = {name:'jakir nayek', job:"scoller"}
const singerStyle = {
  color : 'purple', 
  backgroundColor:'green',
}

function App() {
  return (
    <div className="App">
      <Person></Person>
    </div>
  );
}
function Person(){
  return (

      <div>
          <h1>royel bengol tiger</h1>
          <p>this is inside the div</p>
      </div>

  )
}

export default App;
