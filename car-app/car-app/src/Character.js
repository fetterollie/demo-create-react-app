import { FaTimes } from 'react-icons/fa'


const Character = ({ character, onDelete, onToggle, classes }) => {
    return (
        <div className={`character card ${character.favorite ? 'favorite' : ''}`} onDoubleClick={() => {onToggle(character.id)}}>
            <h3>{character.name} 
                <FaTimes className={classes.btn} onCLick={onDelete} style={{ color: 'red', cursor: 'pointer' }} 
                onClick={() => onDelete(character.id)} />
            </h3>
            <p>{character.speech}</p>
            <img src={character.imgUrl} />
        </div>
    );
}
 
export default Character;