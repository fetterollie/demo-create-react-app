import { useState } from 'react';
import { Button, Typography, Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const AddCharacter = ({ onAdd }) => {
    const [name, setName] = useState('')
    const [speech, setSpeech] = useState('')
    const [favorite, setFavorite] = useState(false)
    const [imgUrl, setImgUrl] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name) {
            alert('Please add a Character')
            return
        }

        onAdd({ name, speech, favorite, imgUrl})

        setName('')
        setSpeech('')
        setFavorite(false)
        setImgUrl('')
    }

    return (
        <Container>
            <Typography
            variant="h6"
            color="textSecondary"
            component="h2"
            gutterBottom
            >
                Add a Character
                <Typography>
                <form className='add-form' onSubmit={onSubmit}>
                    <div className="form-control">
                        <label>Character</label>
                        <input type='text' placeholder="Add Character" value={name} onChange={(e) => {setName(e.target.value)}} />
                    </div>
                    <div className="form-control">
                        <label>Add Character Dialogue</label>
                        <input type='text' placeholder="Add Character" value={speech} onChange={(e) => {setSpeech(e.target.value)}} />
                    </div>
                    <div className="form-control">
                        <label>Add Image URL</label>
                        <input type='text' placeholder="Paste URL here" value={imgUrl} onChange={(e) => {setImgUrl(e.target.value)}} />
                    </div>
                    <div className="form-control form-control-check">
                        <label>Favorite Character</label>
                        <input 
                            type='checkbox' 
                            checked={favorite}
                            value={favorite} 
                            onChange={(e) => {setFavorite(e.currentTarget.checked)}} />
                    </div>
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        // endIcon={<AddIcon />}
                    >
                        Save Character
                    </Button>
                </form>
                </Typography>
            </Typography>
        </Container>
    );
}
 
export default AddCharacter