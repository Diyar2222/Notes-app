import {MdDeleteForever} from "react-icons/md"

export default function Note({id, text,date,deleteNote}) {
  return (
    <div className="note">
            <div className="note-text">{text}</div> 
            <div className="note-footer">
                {date}
                <MdDeleteForever onClick={() =>deleteNote(id)} className="delete-icon" size="1.3em"/>
            </div>
    </div>
    
  )
}
