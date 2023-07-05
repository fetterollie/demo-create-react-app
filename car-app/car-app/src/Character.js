import { makeStyles } from '@material-ui/core'
import { FaTimes } from 'react-icons/fa'

const useStyles = makeStyles({
    test: {
        border: (character) => {
            if (character.favorite == true) {
                return '2px solid green'
            }
        }
    }
})

const Character = ({ character, onDelete, onToggle }) => {
    const classes = useStyles(character.favorite)

    return (
        <div className={classes.test} onDoubleClick={() => {onToggle(character.id)}}>
            <h3>{character.name} 
                <FaTimes onCLick={onDelete} style={{ color: 'red', cursor: 'pointer' }} 
                onClick={() => onDelete(character.id)} />
            </h3>
            <p>{character.speech}</p>
            <img src={character.imgUrl} />
        </div>
    );
}
 
export default Character;