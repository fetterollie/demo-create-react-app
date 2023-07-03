import { useState } from 'react';

const AddCharacter = ({ onAdd }) => {
    const [charName, setCharName] = useState('')
    const [dialogue, setDialogue] = useState('')
    const [favorite, setFavorite] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!charName) {
            alert('Please add a Character')
            return
        }

        onAdd({ charName, dialogue, favorite})

        setCharName('')
        setDialogue('')
        setFavorite(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <label>Character</label>
                <input type='text' placeholder="Add Character" value={charName} onChange={(e) => {setCharName(e.target.value)}} />
            </div>
            <div className="form-control">
                <label>Add Character Dialogue</label>
                <input type='text' placeholder="Add Character" value={dialogue} onChange={(e) => {setDialogue(e.target.value)}} />
            </div>
            <div className="form-control form-control-check">
                <label>Favorite Character</label>
                <input 
                    type='checkbox' 
                    checked={favorite}
                    value={favorite} 
                    onChange={(e) => {setFavorite(e.currentTarget.checked)}} />
            </div>
            <input type='submit' value='Save Character' className="btn btn-block" />
        </form>
    );
}
 
export default AddCharacter