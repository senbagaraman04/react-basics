import { useState } from "react"

function Form() {


    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setName('')
alert('Form submitted')
    }

    return (
      <div className="forms">
<form onSubmit={handleSubmit}>
    <fieldset>
        <div className="firstFiedl">
            <label> Name : </label>
            <input id="name" type="text" placeholder="Name" name="name"  value={name}
            onChange={(e) => setName(e.target.value)}></input>
        </div>

        <button disabled={!name} type="submit">Submit</button>
    </fieldset>
</form>

        </div>
    )
}


export default Form