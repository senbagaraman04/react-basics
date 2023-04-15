import './App.css';

function Header(){
  return <h1>hello world</h1>;
}

function Btn(){
  const clickBtn = () => alert("clicked");
  const OverBtn = () => console.log("OverBtn");
  return (
   

        <button onClick={clickBtn}  onMouseOver={OverBtn}> Click Me</button>
  );
}

function App() {
   return (
   <><Header /><Btn /></>
   );
}

export default App;
