import React, { useState } from 'react';
// import './App.css';


const Cars = () => {
    const carList = [
        {
          id: 1,
          model: "camry",
          year: "2000",
          color: "black"
        },
        {
          id: 2,
          model: "civic",
          year: "1999",
          color: "silver"
        },
        {
          id: 3,
          model: "ridgeline",
          year: "2022",
          color: "green"
        },
        {
          id: 4,
          model: "prius",
          year: "2000",
          color: "orange"
        },
        {
          id: 5,
          model: "camry",
          year: "2022",
          color: "silver"
        },
        {
          id: 6,
          model: "civic",
          year: "2011",
          color: "red"
        },
        {
          id: 7,
          model: "tundra",
          year: "2021",
          color: "grey"
        },
        {
          id: 8,
          model: "accord",
          year: "2005",
          color: "black"
        },
        {
          id: 9,
          model: "prius",
          year: "2005",
          color: "black"
        },
        {
          id: 10, 
          model: "prius",
          year: "1800",
          color: "black"
        }
  ]

  const [submitting, setSubmitting] = useState(false);

  // a place to hold submitted values  
  const [model, setModel] = useState();
  const [color, setColor] = useState();
  const [year, setYear] = useState();

  const [finalArr, setFinalArr] = useState();


  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    const modelArr = carList.filter((carList) => (carList.model === {model}.model))
    const colorArr = carList.filter((carList) => (carList.color === {color}.color))
    const yearArr = carList.filter((carList) => (carList.year === {year}.year))

    const catArr = modelArr.concat(colorArr, yearArr)

    setFinalArr(catArr)


    // console.log(model)
    // console.log(color)
    // console.log(year)
    // // console.log(carList.filter((carList)=>{carList.model === model}))
    // console.log(carList.filter((carList) => (carList.model === {model}.model)))
    // console.log(carList.filter((carList) => (carList.color === {color}.color)))
    // console.log(carList.filter((carList) => (carList.year === {year}.year)))

    // console.log(modelArr, colorArr, yearArr)

    // console.log(catArr)
    console.log(finalArr)

    setTimeout(() => {
        setSubmitting(false);
    }, 2000)
  }

    return (
        <div className="cars">
            <h2>Cars</h2>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <label>
                            Model
                            <input 
                                value={model} 
                                onChange={e => setModel(e.target.value)} 
                            />
                        </label>
                        <label>
                            Color
                            <input 
                                value={color} 
                                onChange={e => setColor(e.target.value)} 
                            />
                        </label>
                        <label>
                            Year
                            <input 
                                value={year} 
                                onChange={e => setYear(e.target.value)} 
                            />
                        </label>
                    </fieldset>
                    <button type="submit">Submit</button>
                </form>
                <div className='output'>
                    <form>
                        <fieldset>
                            <label>
                                { model }  { color }  { year }
                            </label>
                        </fieldset>
                    </form>
                </div>
                <div>
                  {finalArr?.map((car) => {
                    console.log(car);
                    return (
                      <ul>
                        <li>{ car.model }  { car.color }  { car.year }</li>
                      </ul>
                    );
                  })}
                </div>
        </div>
    );
}
 
export default Cars;