import ListItem from "./ListItem.jsx"

const links = [
  {name:'Google', url:'www.google.com'},
  {name:'Youtube', url:'www.youtube.com'},
  {name:'Facebook', url:'www.facebook.com'}
]

function App() {

  return (
    <div>
    <h1>Cátalogo de Links</h1>
    <hr />
    <ul>
      {links.map((link)=>(
        <ListItem 
        key = {link.name}
        name = {link.name}
        url = {link.url}
        />
      ))
    
}
    </ul>
    </div>
  )
}

export default App
