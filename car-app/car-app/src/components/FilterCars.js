import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const FilterCars = () => {

    const [cars, setCars] = useState([])

    const getCars = async () => {
        try{

            const response = await fetch("http://localhost:5000/cars");
            const jsonData = await response.json();

            setCars(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getCars();
    }, []);

    const[make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [color, setColor] = useState('')
    const [year, setYear] = useState('')

    const [finalArr, setFinalArr] = useState([]);
    // const [filteredFinalArr, setFilteredFinalArr] = useState([]);
  
    const [submitting, setSubmitting] = useState(false);
  
    const handleFilter = (event) => {
      event.preventDefault();
      setSubmitting(true);
  
      const modelArr = cars.filter((cars) => (cars.model === {model}.model))
      const colorArr = cars.filter((cars) => (cars.color === {color}.color))
      const yearArr = cars.filter((cars) => (cars.year === {year}.year))
      const makeArr = cars.filter((cars) => (cars.make === {make}.make))
  
      const catArr = modelArr.concat(colorArr, yearArr, makeArr)
  
      // function to remove duplicates & setFinalArr 
      function removeDupes(catArr) {
        const returnCarArray = [];
  
        catArr.forEach((car) => {
          const foundCar = returnCarArray.find((item => ( item.car_id !== null && (item.car_id === car.car_id))))
          if(!foundCar) {
            returnCarArray.push(car);
          }});
        setFinalArr(returnCarArray);
        // console.log(finalArr)
      }
      //invoke remove dupes
      removeDupes(catArr)

      console.log(catArr)
  
      setTimeout(() => {
          setSubmitting(false);
      }, 2000)
    }


    return (
        <Container>
            <Typography variant='h5'>Filter Cars</Typography>
            <form onSubmit={handleFilter} className='' >
                <TextField
                    sx={{ width: "50%" }}
                    label='Make'
                    variant='filled'
                    value={make}
                    onChange={e => setMake(e.target.value)}
                />
                <TextField
                    sx={{ width: "50%" }}
                    label='Model'
                    variant='filled'
                    value={model}
                    onChange={e => setModel(e.target.value)}
                />
                <TextField
                    sx={{ width: "50%" }}
                    label='Color'
                    variant='filled'
                    value={color}
                    onChange={e => setColor(e.target.value)}
                />
                <TextField
                    sx={{ width: "50%" }}
                    label='Year'
                    variant='filled'
                    value={year}
                    onChange={e => setYear(e.target.value)}
                />
                <Button
                    sx={{ width: "100%" }}
                    type="submit"
                >
                    Filter Cars
                </Button>
            </form>
        </Container>
    );
}
 
export default FilterCars;