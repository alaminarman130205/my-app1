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
      <Person name='Rubel' job='janina'></Person>
      <Person name = 'kader' job ='songkito'></Person>
      <Person name='jintu'job ='kosto'></Person>
      <Person name='codna'job ='lallu nantu'></Person>
      <h5>New Component</h5>
      <Friend name='lallu kosai'job ='janela'></Friend>
      <Friend name='jinga lala'job ='functional things'></Friend>
    </div>
  );
}
function Person(props){
  // console.log(props);
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
