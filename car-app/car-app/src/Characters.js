import Character from './Character'

const Characters = ({ characters, onDelete }) => {



    return (
        <>
        {characters.map((character) => (
            <Character key={character.id} 
            character={character} 
            onDelete={onDelete} />
        ))}
        </>
    );
}
 
export default Characters;