import Note from "./Note"
import AddNote from "./AddNote"

export default function NotesList({notes,handleAddNote, deleteNote}) {
  return (
    <div className="notes-list">
        {notes.map((note) => 
        <Note deleteNote={deleteNote} id={note.id} text={note.text} date={note.date}/>)}
        <AddNote handleAddNote={handleAddNote}/>
    </div>
  )
}
