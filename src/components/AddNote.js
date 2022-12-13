import {useState} from "react"

export default function AddNote({handleAddNote}) {
    const [noteText, setNoteText] = useState("")
    const remainingLetters = 200


    function remaining(e){
        if(remainingLetters-e.target.value.length >=0){
            setNoteText(e.target.value)
        }
    }
    const handleSave = () => {
        if(noteText.trim().length>0){
            handleAddNote(noteText)
            setNoteText("")
        }
    }
    
  return (
    <div className="note new">
        <textarea 
        value={noteText}
        onChange={remaining} 
        placeholder="type to text... " 
        rows="20" cols="20"/>
        <div className="note-footer">
            {remainingLetters-noteText.length} remaining
            <button onClick={handleSave} className="save">Save</button>
        </div>
    </div>
  )
}
