import Character from './Character'

const Characters = ({ characters }) => {



    return (
        <>
        {characters.map((character) => (
            <Character key={character.id} character={character} />
        ))}
        </>
    );
}
 
export default Characters;