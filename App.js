import React, { useState, useEffect } from 'react'
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([]) 
  const [newNote, setNewNote] = useState('')

  useEffect(() => {
    noteService.getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      firstName: newNote.firstName,
      lastName: newNote.lastName,
      email: newNote.email,
      username: newNote.username,
      foundationName: newNote.foundationName,
      phoneNumber: newNote.phoneNumber,
      password: newNote.password,
      active: true,
      id: newNote.length + 1,
    }  
    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Foundations Register</h1>    
      <form onSubmit={addNote}>
        <input type="text" id="nombre" placeholder="First name"
          value={newNote.firstName}
          onChange={handleNoteChange}
        />
        <br/>
        <input type="text" id="Apellido" placeholder="Last name"
          value={newNote.lastName}
          onChange={handleNoteChange}
        />
        <br/>
        <input type="email" id="email" placeholder="Email"
          value={newNote.email}
          onChange={handleNoteChange}
        />
        <br/>
        <input type="text" id="userName" placeholder="Username"
          value={newNote.userName}
          onChange={handleNoteChange}
        />
        <br/>
        <input type="text" id="foundationName" placeholder="Organization name"
          value={newNote.foundationName}
          onChange={handleNoteChange}
        />
        <br/>
        <input type="text" id="phoneNumber" placeholder="Number phone"
          value={newNote.phoneNumber}
          onChange={handleNoteChange}
        />
        <br/>
        <input type="password" id="password" placeholder="password"
          value={newNote.password}
          onChange={handleNoteChange}
        />
        <br/>
        <br/>
        <button type="submit">Create Account</button>
      </form>   
    </div>
  )
}
export default App 
