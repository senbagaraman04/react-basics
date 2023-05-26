import React from "react";

function GoalForm(props) {
  const [formData, setFromData] = React.useState({goal:"", by: ""});
  
  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  
  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({goal: "", by: ""});
  }
  
  
  return (
    <>
    <h1> My Little Lemon Website </h1>
    <form onSubmit={submitHandler}>
     <input type="text" name="goal" value={formData.goal} onChange={changehandler} />  
       <input type="text" name="by" value={formData.by} onChange={changehandler} />
         
         <button> submit goal </button>
</form>
</>
);
}


function ListOfGoals(props) {
  
}


export default function App() {
  const [allGoals, updateAllGoals] = React.useState([]);
  
  function addGoal(goal) { updaetAllGoals([...allGoals, goal]); }
  
  return (  
    <div className="App">
    <GoalForm onAdd={addGoal}  />
  <ListOfGoals allGoals={allGoals} />
    </div>
);
}
