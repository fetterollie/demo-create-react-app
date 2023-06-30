import React, { useState } from 'react';
// import './App.css';


const Cars = () => {
    const [carList, setCarList] = useState([
        {
          id: 1,
          model: "camry",
          year: "2000",
          color: "black",
          image: "https://www.cars.com/i/large/in/v2/stock_photos/eb21143e-14d4-4d91-a404-214e87cd173c/8d4e56cf-9601-4b8b-a896-b67ffab0ca90.png"
        },
        {
          id: 2,
          model: "civic",
          year: "1999",
          color: "silver",
          image: "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/8864cd06c16cf34eddf5229bf01bf6bfafe9d766/photos/KP8m5k6N-d6qM71I-SH-(edit).jpg?t=166058206926"
        },
        {
          id: 3,
          model: "ridgeline",
          year: "2022",
          color: "black",
          image: "https://media.ed.edmunds-media.com/honda/ridgeline/2021/oem/2021_honda_ridgeline_crew-cab-pickup_black-edition_fq_oem_1_1600.jpg"
        },
        {
          id: 4,
          model: "prius",
          year: "2015",
          color: "orange",
          image: "https://65e81151f52e248c552b-fe74cd567ea2f1228f846834bd67571e.ssl.cf1.rackcdn.com/Toyota/2018%20Prius%20C/2018-PriusC-TangerineSplash.png"
        },
        {
          id: 5,
          model: "camry",
          year: "2022",
          color: "silver",
          image: "https://di-enrollment-api.s3.amazonaws.com/toyota/models/2022/Camry/colors/CELESTIAL+SILVER+METALLIC_MIDNIGHT+BLACK+METALLIC+ROOF+AND+REAR+SPOILER.jpg"
        },
        {
          id: 6,
          model: "civic",
          year: "2011",
          color: "red",
          image: "https://file.kelleybluebookimages.com/kbb/base/house/2011/2011-Honda-Civic-FrontSide_HOCIVSICPE111_640x480.jpg"
        },
        {
          id: 7,
          model: "tundra",
          year: "2021",
          color: "grey",
          image: "https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/8b66-11001982/5TFEY5F18MX288231/18e09c2e53fafeda8593de55f59a2547.jpg"
        },
        {
          id: 8,
          model: "accord",
          year: "2005",
          color: "black",
          image: "https://automanager.blob.core.windows.net/wmphotos/019736/a572868124b8f84eaa3acc46ef332ca3/14686e0d55_640.jpg"
        },
        {
          id: 9,
          model: "prius",
          year: "2005",
          color: "black",
          image: "https://static.cargurus.com/images/forsale/2023/06/10/08/09/2006_toyota_prius-pic-502382596866252182-1024x768.jpeg"
        },
        {
          id: 10, 
          model: "quadricycle",
          year: "1896",
          color: "black",
          image: "https://s.yimg.com/os/en-US/blogs/motoramic/Ford_Quadricycle.jpg"
        }
  ])

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
                  {/* Display finalArr */}
                  {finalArr?.map((car) => {
                    return (
                      <ul key={car.id}>
                        <li>{ car.model }  { car.color }  { car.year } <img className="thumbnail" src={car.image} /> </li>
                      </ul>
                    );
                  })}
                </div>
        </div>
    );
}
 
export default Cars;