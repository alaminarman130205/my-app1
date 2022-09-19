import logo from './logo.svg';
import './App.css';
const number = 555;
const singers = [
    {name:'dr asik',job: 'singer'},
    {name:'rokya',job: 'naika'},
    {name:'habu',job: 'bua khor'},
    {name:'jakir nayek', job:"scoller"}
  ]

const singerStyle = {
  color : 'purple', 
  backgroundColor:'green',
}

function App() {
  const nayoks = ['rubel ', ' bapparaj', ' kubel', 'jasim', ' salman sah', ' riaz ', 'rajjak',' lallu kosai'];
  return (
  
    <div className="App">
      <h1>Dynamically Loaded data from array and object</h1>
      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }
      {
        singers.map(singer => <Friend name={singer.name} job={singer.job}></Friend>)
      }
    </div>
  );
}


function Person(props){

  return (

      <div className='Person'>
          <h1>Name {props.name}</h1>
          <p>Occapetion : {props.job}</p>
      </div>

  )
}


function Friend(props){
  return(
    <div className='container'>
      <h3>Name {props.name}</h3>
      <p>Occapetion : {props.job}</p>
    </div>
  )
}
export default App;
