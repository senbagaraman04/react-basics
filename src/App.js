import './App.css';
import InputComponent from './hook'
import  EventHandling from './EventHandling'
 

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
  function handleClick() {
        let randomNum = Math.floor(Math.random() * 3) + 1;
        console.log(randomNum);
        let userInput = prompt('type a number');
        alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
      }

   return (
   <><Header /><Btn />
     <div>
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick}>Guess the number between 1 and 3</button>
    </div>


<InputComponent/>
<hr/>

<EventHandling/>
   </>
   );
}

export default  App;
