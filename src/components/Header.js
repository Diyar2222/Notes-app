export default function Header({toggler, setToggler}) {
  
  return (
    <div className={toggler ? "darkmode-header" : "header"}>
        <h1>Notes</h1>
        <div className="darkmode-toggler">
          <h3>Darkmode</h3>
          <div onClick={()=>setToggler(prev => !prev)} className={`darkmode-container ${toggler ? 'on' : ''}`}>
          <div className={`darkmode-circle ${toggler ? 'toggled' : ''}`}></div>
          </div>
        </div>
        
    </div>
    
  )
}
