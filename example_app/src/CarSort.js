import React, { useReducer, useState } from 'react';
// import './App.css';

const formReducer = (state, event) => {
 return {
   ...state,
   [event.target.name]: event.target.value
 }
}

const carList = [
      {
        model: "camry",
        year: 2000,
        color: "black"
      },
      {
        model: "civic",
        year: 1999,
        color: "silver"
      },
      {
        model: "ridgeline",
        year: 2022,
        color: "green"
      },
      {
        model: "prius",
        year: 2000,
        color: "orange"
      },
      {
        model: "camry",
        year: 2022,
        color: "silver"
      },
      {
        model: "civic",
        year: 2011,
        color: "red"
      },
      {
        model: "tundra",
        year: 2021,
        color: "grey"
      },
      {
        model: "accord",
        year: 2005,
        color: "black"
      },
      {
        model: "prius",
        year: 1800,
        color: "black"
      },
      {
        model: "prius",
        year: 1800,
        color: "black"
      }
]




function App() {
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);
    // List of all cars satisfing all the filters
    const [filteredList, setFilteredList] = useState(carList);
    // Selected Model name filter
    const [selectedModel, setSelectedModel] = useState("");
    // Selected Year filter
    const [selectedYear, setSelectedYear] = useState();

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000)



    console.log(formData)
    console.log(carList)
    console.log(carList.filter((carList) => carList.model.indexOf(formData)!== -1))
  }

  return(
    <div className="wrapper">
      <h1>Car Search</h1>
      {submitting &&
        <div>Submtting Form...</div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Model</p>
            <input name="model" onChange={setFormData}/>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;