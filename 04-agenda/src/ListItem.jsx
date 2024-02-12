const ListItem = ({name, lastname, phone, adress, carr}) => {
    return(
        <div>
            <li>
            {name} {lastname}:
            <ul>Tel: {phone}</ul>
            <ul>Dirección: {adress}</ul>
            <ul>Carrera: {carr}</ul>
            </li>
        </div>
        
        
    )
}
export default ListItem