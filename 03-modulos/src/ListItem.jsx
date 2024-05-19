const ListItem = ({url, name}) => {
    return(
        <li>
        <a href={url}>{name}</a>
        </li>
    )
}
export default ListItem