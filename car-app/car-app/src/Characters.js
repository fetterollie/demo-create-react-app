import AddCharacter from './AddCharacter';
import Character from './Character'


const Characters = ({ characters, onDelete, onToggle, onAdd, classes }) => {

    return (
        
        <>
        <AddCharacter onAdd={onAdd}/>
        {characters.map((character) => (
            <Character key={character.id} 
            character={character} 
            onDelete={onDelete} 
            onToggle={onToggle}
            classes={classes} />
        ))}
        </>
    );
}
 
export default Characters;