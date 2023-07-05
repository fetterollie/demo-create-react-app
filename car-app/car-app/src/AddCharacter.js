import { useState } from 'react';
import { Button, Typography, Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
            variant="h5"
            color="textSecondary"
            component="h2"
            gutterBottom
            >
                Add a Character
            </Typography>
            <Typography>
                <form className='add-form' onSubmit={onSubmit} noValidate autoComplete='off'>
                    <TextField
                        label='Add Character'
                        variant='outlined'
                        value={name} onChange={(e) => {setName(e.target.value)}}
                        required
                    />
                    <TextField 
                        label='Add Dialogue'
                        variant='outlined'
                        value={speech} 
                        onChange={(e) => {setSpeech(e.target.value)}}
                        required
                    />
                    <TextField 
                        label='Add Image URL'
                        variant='outlined'
                        value={imgUrl} 
                        onChange={(e) => {setImgUrl(e.target.value)}}
                    />
                    <FormControlLabel control={
                            <Checkbox 
                            checked={favorite}
                            onChange={(e) => {setFavorite(e.currentTarget.checked)}}
                            />
                        } label='Favorite Character'
                    />
                    <br />
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
        </Container>
    );
}
 
export default AddCharacter