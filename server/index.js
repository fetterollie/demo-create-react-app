const express = require("express");
const app = express();
const cors = require('cors');
const pool = require('./db');

// middleware
app.use(cors());
app.use(express.json()); //adds req.body to access this obj

// ROUTES

// create a car
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

// get all cars
app.get("/cars", async(req, res) => {
    try{
        const allCars = await pool.query("SELECT * FROM cars");
        res.json(allCars.rows);
    } catch {
        console.error(err.message);
    }
});

// get a car
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

// update a car
app.put("/cars/:id", async(req, res) => {
    try{
        const { id } = req.params;
        const {  make, model, color, year, imgUrl, powerwindows, powerlocks, backupcamera } = req.body;
        const updateCar = await pool.query(
            "UPDATE cars SET make = $1, model = $2, color = $3, year = $4, imgUrl = $5, powerwindows = $6, powerlocks = $7, backupcamera = $8 WHERE car_id = $9",
            [make, model, color, year, imgUrl, powerwindows, powerlocks, backupcamera, id]);

            res.json("Car was updated!")
    } catch {
        console.error(err.message)
    }
});

// delete a car
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

// register a new user
app.post('/register', async (req, res) => {
    try {
        const { usernameReg, passwordReg, roleReg } = req.body;
        const newUser = await pool.query(
            "INSERT INTO users (username, password, role) VALUES($1, $2, $3) RETURNING *", 
            [usernameReg, passwordReg, roleReg]
        );
        console.log(newUser.rows[0]);
        // res.json(newUser.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

// login new attempt 7.13.23 1100
app.post('/login', async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        const user = await pool.query(
            "SELECT * FROM users WHERE username = $1 AND password = $2", 
            [username, password]
        );
        // console.log(user.rows[0].role);
        res.send({ token: user.rows[0].role});
    } catch (err) {
        console.error(console.log('ERROR!'));
    }
});

// all users
app.get("/users", async(req, res) => {
    try{
        const allUsers = await pool.query("SELECT * FROM users");
        res.json(allUsers.rows);
    } catch {
        console.error(err.message);
    }
});

// get a role given username and password
app.get("/users/:username/:password", async(req, res) => {
    try{
        const{ username, password } = req.params;
        const user = await pool.query(
            "SELECT * FROM users WHERE username = $1 AND password = $2", 
            [username, password]
        );
        {res ? 
            res.json(user.rows) : 
            res.send({message: "Wrong username/password combination!"})
        };
    } catch {
        console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log("server has started on port 5000")
});