import ListItem from "./ListItem.jsx"

const links = [
  {name:'Alain', lastname:'Cruz Lozano', phone:'2870408134',adress:'1', carr:'ISC'},
  {name:'Roberto', lastname:'Gomez Bolaños', phone:'28712460298',adress:'Enrique Segoviano', carr:'GE'},
  {name:'Carlos', lastname:'Lopez ', phone:'28712347868',adress:'2', carr:'IE'}
]

function App() {

  return (
    <div>
    <h1>AGENDA</h1>
    <hr />
    <ul>
      {links.map((link)=>(
        <ListItem 
        key = {link.name}
        name = {link.name}
        lastname={link.lastname}
        phone={link.phone}
        adress={link.adress}
        carr={link.carr}
        />
      ))
    
}
    </ul>
    </div>
  )
}

export default App
