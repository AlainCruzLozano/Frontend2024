import { useState } from "react"

function App() {
  const [username, setUsername]= useState("")

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("hola",username)
    setUsername("")
  }

  return (
    <div>
      <h1>INPUTS</h1>
      <hr />
    <form onSubmit={(e)=>handleSubmit(e)}>
      <div>
        <label htmlFor="username">Username </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(event) => handleUsernameChange(event)}
        />
      </div>
      <br />
      <div>
      <label htmlFor="password">Pasword </label>
      <input id="password" type="password"/>
      </div>
      <br />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  )
}

export default App
