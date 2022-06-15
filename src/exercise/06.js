// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useRef, useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  const inputRef = useRef(null)
  // const [error, setError] = useState(null)
  const [inputUsername, setInputUsername] = useState('')
  const handleSubmit = event => {
    event.preventDefault()
    //using the DOM event target and name
    // const inputVal = event.target.usernameInput.value

    //using ref
    const inputVal = inputRef.current.value
    onSubmitUsername(inputVal)
  }

  const handleChange = event => {
    const val = event.target.value
    // validation
    // const isValid = val === val.toLowerCase()
    // setError(!isValid ? 'Username must be lowercase' : null)
    setInputUsername(val.toLowerCase())
  }
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username-input">Username:</label>
        <input
          ref={inputRef}
          id="username-input"
          name="usernameInput"
          type="text"
          value={inputUsername}
          onChange={handleChange}
        />
        {/* <div style={{color: 'red'}} role="alert" id="error-alert">
          {error}
        </div> */}
      </div>
      <button type="submit">Submit</button>
      {/* <button disabled={Boolean(error)} type="submit">
        Submit
      </button> */}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
