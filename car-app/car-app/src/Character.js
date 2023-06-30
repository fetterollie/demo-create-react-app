import { FaTimes } from 'react-icons/fa'


const Character = ({ character }) => {
    return (
        <div className="character">
            <h3>{character.name} <FaTimes style={{ color: 'red', cursor: 'pointer' }}/></h3>
            <p>{character.speech}</p>
            <img src={character.imgUrl} />

        </div>
    );
}
 
export default Character;