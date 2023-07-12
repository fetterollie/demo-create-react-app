const express = require("express");
const app = express();
const cors = require('cors');
const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json()); //adds req.body to access this obj

//ROUTES//

//create a car//

app.post("/cars", async(req, res) => {
    try {
        // console.log(req.body);
        const { make, model, color, year, imgUrl } = req.body;
        const newCar = await pool.query(
            "INSERT INTO cars (make, model, color, year, imgUrl) VALUES($1, $2, $3, $4, $5) RETURNING *", 
            [make, model, color, year, imgUrl]
        );
        res.json(newCar.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//get all cars//

app.get("/cars", async(req, res) => {
    try{
        const allCars = await pool.query("SELECT * FROM cars");
        res.json(allCars.rows);
    } catch {
        console.error(err.message);
    }
});

//get a car//

app.get("/cars/:id", async(req, res) => {
    try{
        const{ id } = req.params;
        const car = await pool.query(
            "SELECT * FROM cars WHERE car_id = $1", 
            [id]
        );
        res.json(car.rows[0]);
    } catch {
        console.error(err.message);
    }
});

//update a car//

app.put("/cars/:id", async(req, res) => {
    try{
        const { id } = req.params;
        const { make, model, color, year, imgUrl } = req.body;
        const updateCar = await pool.query(
            "UPDATE cars SET make = $1, model = $2, color = $3, year = $4, imgUrl = $5 WHERE car_id = $6",
            [make, model, color, year, imgUrl, id]);

            res.json("Car was updated!")
    } catch {
        console.error(err.message)
    }
});

//delete a car

app.delete("/cars/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const deleteCar = await pool.query(
            "DELETE FROM cars WHERE car_id = $1",
            [id]
        );
        res.json("Car was deleted!")
    } catch {
        console.log(err.message)
    }
});


// login 
app.use('/login', (req, res) => {
    res.send({
        token: 'test123'
    });
});

// attempt at username login
// app.get('/login', async (req, res) => {
//     try {
//         const { username, password } = req.params;
//         const loginUser = await pool.query(
//             "SELECT * FROM users WHERE username = $1 AND password = $2", 
//             [username, password]
//         )
//         console.log(res)
//     } catch (err) {
//         console.error(err.message)
//     }
// })


app.listen(5000, () => {
    console.log("server has started on port 5000")
});