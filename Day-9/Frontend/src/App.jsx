import { useState,useEffect } from 'react'
import axios from "axios"



function App() {
  const [Notes, setNotes] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [updatedDescription, setUpdatedDescription] = useState("")


  function fetchNotes() {
    axios.get("https://note-3yyl.onrender/api/notes").then((res) => {
      setNotes(res.data.notes);
    });
  }
  useEffect(() => {
    fetchNotes();
  }, []);
  
   function handleSubmit(e){
    e.preventDefault()
    const {title, description}= e.target.elements
    axios.post("https://note-3yyl.onrender/api/notes",{
      title: title.value,
      description: description.value
    })
    .then(res =>{
      console.log(res.data)
      fetchNotes()
    })
  
  }

  function handleDeleteNote(noteId){
    axios.delete("https://note-3yyl.onrender/api/notes/"+noteId)
    .then(res=>{
      console.log(res.data)
      fetchNotes() 
    })
  }
  
  function handleUpdateNote(noteId) {
  axios.patch("https://note-3yyl.onrender/api/notes/"+noteId, {
    description: updatedDescription
  })
  .then(res => {
    console.log(res.data);
    setEditingId(null);
    setUpdatedDescription("");
    fetchNotes();
  });
}

  return (
    <>
      <form onSubmit={handleSubmit} className="note-create-form">
        <input name="title" type="text" placeholder="Enter Title" />
        <input name="description" type="text" placeholder="Enter Description" />
        <button>Create Note</button>
      </form>
      <div className="notes">
        {Notes.map((note) => {
          return (
            <div className="note" key={note._id}>
              <h1>{note.title}</h1>
              {editingId === note._id ? (
                <>
                  <input
                    type="text"
                    value={updatedDescription}
                    onChange={(e) => setUpdatedDescription(e.target.value)}
                  />
                  <button className="updatebtn" onClick={() => handleUpdateNote(note._id)}>
                    Update
                  </button>
                  <button className="cancelbtn" onClick={() => setEditingId(null)}>Cancel</button>
                </>
              ) : (
                <>
                  <p>{note.description}</p>
                  <button
                  className="editbtn"
                    onClick={() => {
                      setEditingId(note._id);
                      setUpdatedDescription(note.description);
                    }}
                  >
                    Edit <i class="ri-edit-line"></i>
                  </button>
                </>
              )}
              <button
              className="deletebtn"
                onClick={() => {
                  handleDeleteNote(note._id);
                }}
              >
                Delete <i class="ri-delete-bin-line"></i>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App
