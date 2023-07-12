CREATE DATABASE demo;

CREATE TABLE cars(
    car_id SERIAL PRIMARY KEY,
    make VARCHAR(16),
    model VARCHAR(16),
    color VARCHAR(16),
    year INT,
    imgUrl VARCHAR(2048)
);