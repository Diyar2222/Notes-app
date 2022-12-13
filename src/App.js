import Header from "./components/Header"
import {nanoid} from "nanoid"
import {useState,useEffect} from "react"
import Search from "./components/Search"
import NotesList from "./components/NotesList"


function App() {
 const date = new Date().toLocaleDateString()
 const [searchText, setSearchText] = useState("")
 const [toggler,setToggler] = useState(false)
 const [notes, setNotes] = useState([
  {
    id: nanoid(),
    text: "This is my first note",
    date: "30.10.2022"
  },
  {
    id: nanoid(),
    text: "This is my second note",
    date: "30.10.2022"
  },
  {
    id: nanoid(),
    text: "This is my third note",
    date: "30.10.2022"
  },
])
  const handleAddNote = (text) => {
    const newNote = {
      id:nanoid(),
      text: text,
      date: date
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }
  const deleteNote = (id) => {
   const newNotes = notes.filter(elem => id !== elem.id)
   setNotes(newNotes)
  }
  useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem("key"));
    if(savedNotes){
      setNotes(savedNotes)
    }
  },[]);
  
  useEffect(()=>{
    localStorage.setItem("key",JSON.stringify(notes));
  },[notes]);

  return (
    <div className={toggler ? "darkmode" : "App"}>
      <div className="container">
        <Header toggler ={toggler} setToggler={setToggler}/>
        <Search setSearchText={setSearchText}/>
        <NotesList 
        notes={notes.filter(elem => elem.text.toLowerCase().includes(searchText))}
        deleteNote={deleteNote} 
        handleAddNote={handleAddNote} />
      </div>
    </div>
  );
}

export default App;
