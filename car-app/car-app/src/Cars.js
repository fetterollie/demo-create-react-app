import React, { useEffect, useState } from 'react';
import api from './api/carList'

// import './App.css';


const Cars = () => {
    const [carList, setCarList] = useState([

    ])

  useEffect(() => {
    const fetchCars = async () => {
      try{
        const response = await api.get('/carList'); //endpoint
        // axios automatically catches errors outside of the 200 range.
        setCarList(response.data);
      } catch (err) {
        if (err.response) {
        // Not in the 200 response range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
        } else {
          // possible no response, 404, or something else occured
          console.log(`Error: ${err.message}`)
        }
      }
    }
    fetchCars();
    // console.log(`carList: ${carList}`)
  }, [])

  const [submitting, setSubmitting] = useState(false);

  // a place to hold submitted values  
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');
  const [year, setYear] = useState('');

  const [finalArr, setFinalArr] = useState([]);
  // const [filteredFinalArr, setFilteredFinalArr] = useState([]);



  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    const modelArr = carList.filter((carList) => (carList.model === {model}.model))
    const colorArr = carList.filter((carList) => (carList.color === {color}.color))
    const yearArr = carList.filter((carList) => (carList.year === {year}.year))

    const catArr = modelArr.concat(colorArr, yearArr)

    // function to remove duplicates & setFinalArr 
    function removeDupes(catArr) {
      const returnCarArray = [];

      catArr.forEach((car) => {
        const foundCar = returnCarArray.find((item => ( item.id !== null && (item.id === car.id))))
        if(!foundCar) {
          returnCarArray.push(car);
        }});
      setFinalArr(returnCarArray);
      // console.log(finalArr)
    }
    //invoke remove dupes
    removeDupes(catArr)

    setTimeout(() => {
        setSubmitting(false);
    }, 2000)
  }

    return (
        <div className="container">
            <h2>Cars</h2>
                <form onSubmit={handleSubmit} className='' >
                  <div className='form-control'>
                    <label>Model</label>
                      <input 
                          value={model} 
                          onChange={e => setModel(e.target.value)} 
                      />
                  </div>
                  <div className='form-control'>
                    <label>Color</label>
                    <input 
                        value={color} 
                        onChange={e => setColor(e.target.value)} 
                    />
                  </div>
                  <div className='form-control'>
                    <label>Year</label>
                    <input 
                        value={year} 
                        onChange={e => setYear(e.target.value)} 
                    />
                  </div>
                  <div>
                    <button className="btn" type="submit">Submit</button>
                  </div>
                </form>

                <div className='container'>
                {"Search Results for:  "} { model } { color } { year }
                  {/* Display finalArr */}
                  {finalArr?.map((car) => {
                    return (
                      <ul key={car.id}>
                        <li class>{ car.model }  { car.color }  { car.year } <img className="thumbnail" src={car.image} /> </li>
                      </ul>
                    );
                  })}
                </div>
        </div>
    );
}
 
export default Cars;