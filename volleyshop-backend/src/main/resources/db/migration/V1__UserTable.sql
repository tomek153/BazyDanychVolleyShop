CREATE TABLE IF NOT EXISTS users (
    ID UUID PRIMARY KEY NOT NULL,
    firstName VARCHAR(45) NOT NULL,
    lastName VARCHAR(45) NOT NULL,
    email VARCHAR(60) NOT NULL,
    password VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS clothes (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    gender CHAR(10) NOT NULL
        CONSTRAINT CK_clothes_gender CHECK (gender IN ('Meskie', 'Damskie')),
    brand VARCHAR(60) NOT NULL,
    description VARCHAR NOT NULL,
    prize REAL NOT NULL,
    type VARCHAR(60),
    image VARCHAR
);

CREATE TABLE IF NOT EXISTS shoes (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    gender CHAR(10) NOT NULL
        CONSTRAINT CK_shoes_gender CHECK (gender IN ('Meskie', 'Damskie')),
    brand VARCHAR(60) NOT NULL
        CONSTRAINT CK_shoes_brand CHECK (brand IN ('Adidas', 'Reebok', 'Nike', 'Mizuno', 'Asics')),
    description VARCHAR NOT NULL,
    prize REAL NOT NULL,
    image VARCHAR
);

CREATE TABLE IF NOT EXISTS accessories (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    gender CHAR(10) NOT NULL
        CONSTRAINT CK_clothes_gender CHECK (gender IN ('Meskie', 'Damskie', 'Dowolne')),
    brand VARCHAR(60) NOT NULL,
    description VARCHAR NOT NULL,
    prize REAL NOT NULL,
    type VARCHAR(60),
    image VARCHAR
);

CREATE TABLE IF NOT EXISTS supplements (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    brand VARCHAR(60) NOT NULL,
    description VARCHAR NOT NULL,
    prize REAL NOT NULL,
    type VARCHAR(60),
    image VARCHAR
);