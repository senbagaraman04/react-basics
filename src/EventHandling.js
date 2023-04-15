import React from 'react'
function HeaderComponent(props){
    return (
        <h1> {props.name}</h1>
    )
}
function EventHandling() {
    const [word, setWord ] = React.useState("Eat");

    function HandleClick() {
    setWord('Drink')
    }
    return (
        <div>
            <HeaderComponent name={word + ' at the restuarent'} />
        <button onClick={HandleClick}> OnCLick</button>
        </div>
    )
}

export default EventHandling;