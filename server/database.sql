CREATE DATABASE demo;

CREATE TABLE cars(
    car_id SERIAL PRIMARY KEY,
    make VARCHAR(16),
    model VARCHAR(16),
    color VARCHAR(16),
    year INT,
    imgUrl VARCHAR(2048)
);

CREATE TABLE users( 
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(25) NOT NULL,
    password VARCHAR(30) NOT NULL,
    role VARCHAR(10) NOT NULL
);

INSERT INTO users (user_id, username, password, role)
VALUES (2, 'user', 'user', 'user');

DELETE FROM users *;