import './App.css';
import InputComponent from './hook';
import  EventHandling from './EventHandling';
import Calc from './Calc';
// import { Routes, Route, Link } from "react-router-dom";

function Header(){
  return (
 <div>
  {/* <nav>
  <Link to="/" className="nav-item">Homepage</Link>
  <Link to="/about" className="nav-item">About Little Lemon</Link>
  <Link to="/contact" className="nav-item">Contact</Link>
</nav>
  <Routes> 
    <Route path="/" element={<Homepage />}></Route>
    <Route path="/about" element={<AboutLittleLemon />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
  </Routes> */}
</div>


 
  );
}

function Btn(){
  const clickBtn = () => alert("clicked");
  const OverBtn = () => console.log("OverBtn");
  return (
   

        <button onClick={clickBtn}  onMouseOver={OverBtn}> Click Me</button>
  );
}

 

function App() {
  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
   console.log(randomNum);
   let userInput = prompt('type a number');
        alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
   }

   return (
   <><Header /><Btn />
   <div> <h1>Task: Add a button and handle a click event</h1>
<button onClick={handleClick}>Guess the number between 1 and 3</button>
 </div>


<InputComponent/>
<hr/>

<EventHandling/>


<Calc />
   </>
   );
}

export default  App;
