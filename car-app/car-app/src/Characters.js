import Character from './Character'

const Characters = ({ characters, onDelete, onToggle }) => {



    return (
        <>
        {characters.map((character) => (
            <Character key={character.id} 
            character={character} 
            onDelete={onDelete} 
            onToggle={onToggle} />
        ))}
        </>
    );
}
 
export default Characters;