import { Button, Card, CardActions, CardContent, Typography, makeStyles } from '@material-ui/core'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const useStyles = makeStyles({
    test: {
        border: (character) => {
            if (character.favorite === true) {
                return '2px solid green'
            }
        }
    },
    favorite: {
        border: '2px solid green'
    },
    card: {
        overflow: 'hidden',
        boxShadow: '0 2px 20px #f9f9f9',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
        transition: 'transform 200ms'
    },


})

const Character = ({ character, onDelete, onToggle }) => {
    const classes = useStyles(character.favorite)
    const loremIpsum = "Lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    return(
        <div className={character.favorite ? classes.favorite : ""} onDoubleClick={() => {onToggle(character.id)}} key={character.id}>
                <Card sx={{ maxWidth: 200 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            <img 
                            src={character.imgUrl}
                            width='200px'
                            
                            />
                        </Typography>
                        <Typography 
                            gutterBottom
                            variant='h6'
                            component="div"
                        >
                            {character.name}
                        </Typography>
                        <Typography
                            sx={{ fontSize: 14}}
                            variant='body2'
                            color='text.secondary'
                            gutterBottom
                        >
                            {`${character.name} says "${character.speech}"! Their favorite color is ${character.color}. ${loremIpsum}`}
                        </Typography>
                        <CardActions>
                                <Button 
                                    size="small"
                                    onClick={() => onDelete(character.id)}
                                >
                                    <DeleteForeverIcon size='small' />
                                    Delete Character
                                </Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </div>
    )

    // return (
    //     <div className={classes.test} onDoubleClick={() => {onToggle(character.id)}}>
    //         <h3>{character.name} 
    //             <FaTimes onCLick={onDelete} style={{ color: 'red', cursor: 'pointer' }} 
    //             onClick={() => onDelete(character.id)} />
    //         </h3>
    //         <p>{character.speech}</p>
    //         <img src={character.imgUrl} />
    //     </div>
    // );
}
 
export default Character;