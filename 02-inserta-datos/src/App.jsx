const persona ={
  nombre : 'Alain Cruz Lozano',
  edad : 21,
  carrera: 'ISC',
  numControl: 20350262,
  pasatiempo: ['Leer','Bici','Videojuegos'],
  naciFecha: '27 de Julio del 2002',
  naciLugar: 'Tuxtepec Oaxaca',
  zodiaco: 'LEO'
}
function App() {

  return (
    <div>
      <h1>Inserta Datos</h1>
      <hr />
        
        <li>Nombre: {persona.nombre}</li>
        <li>Edad: {persona.edad}</li>
        <li>Carrera: {persona.carrera}</li>
        <li>Numero de Control: {persona.numControl}</li>
        <li>Fecha de Nacimiento: {persona.naciFecha}</li>
        <li>Lugar de Nacimiento: {persona.naciLugar}</li>
        <li>Signo: {persona.zodiaco}</li>
        <li>Pasatiempos:</li>   
        <ul>
          {persona.pasatiempo.map((pasatiempo) => { return <li key={pasatiempo}>{pasatiempo}</li>})}
        </ul>
    </div>
  ) 
}

export default App
