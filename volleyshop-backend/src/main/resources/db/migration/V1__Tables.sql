CREATE TABLE IF NOT EXISTS brands (
    brand VARCHAR NOT NULL
        CONSTRAINT brands_pkey
            PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS categories (
    category VARCHAR NOT NULL
        CONSTRAINT categories_pkey
            PRIMARY KEY
);
CREATE TABLE IF NOT EXISTS types (
    type VARCHAR NOT NULL
        CONSTRAINT types_pkey
            PRIMARY KEY,
    category VARCHAR NOT NULL,
    FOREIGN KEY (category) REFERENCES categories(category) on update cascade on delete cascade
);

CREATE TABLE IF NOT EXISTS users (
    ID UUID PRIMARY KEY NOT NULL,
    firstName VARCHAR NOT NULL,
    lastName VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    password VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS shoes (
    ID SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    gender VARCHAR NOT NULL
        CONSTRAINT CK_shoes_gender CHECK (gender IN ('Męskie', 'Damskie', 'Junior')),
    brand VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    prize REAL NOT NULL,
    image VARCHAR,
    FOREIGN KEY (brand) REFERENCES brands(brand) on update cascade on delete cascade
);

CREATE TABLE IF NOT EXISTS clothes (
    ID SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    gender VARCHAR NOT NULL
        CONSTRAINT CK_clothes_gender CHECK (gender IN ('Męskie', 'Damskie')),
    brand VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    prize REAL NOT NULL,
    type VARCHAR,
    image VARCHAR,
    FOREIGN KEY (brand) REFERENCES brands(brand) on update cascade on delete cascade,
    FOREIGN KEY (type) REFERENCES types(type) on update cascade on delete cascade
);

CREATE TABLE IF NOT EXISTS accessories (
    ID SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    gender VARCHAR NOT NULL
        CONSTRAINT CK_clothes_gender CHECK (gender IN ('Męskie', 'Damskie', 'Dowolne')),
    brand VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    prize REAL NOT NULL,
    type VARCHAR,
    image VARCHAR,
    FOREIGN KEY (brand) REFERENCES brands(brand) on update cascade on delete cascade,
    FOREIGN KEY (type) REFERENCES types(type) on update cascade on delete cascade
);

CREATE TABLE IF NOT EXISTS supplements (
    ID SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    brand VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    prize REAL NOT NULL,
    type VARCHAR,
    image VARCHAR,
    FOREIGN KEY (brand) REFERENCES brands(brand) on update cascade on delete cascade,
    FOREIGN KEY (type) REFERENCES types(type) on update cascade on delete cascade
);

CREATE TABLE IF NOT EXISTS users_logs(
    firstName VARCHAR NOT NULL,
    lastName  VARCHAR NOT NULL,
    email     VARCHAR NOT NULL,
    password  VARCHAR NOT NULL,
    date TIMESTAMP NOT NULL
);
CREATE TABLE IF NOT EXISTS shoes_logs(
    name VARCHAR NOT NULL,
    gender VARCHAR NOT NULL,
    brand VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    prize REAL NOT NULL,
    image VARCHAR,
    date TIMESTAMP NOT NULL
);
CREATE TABLE IF NOT EXISTS clothes_logs(
    name VARCHAR NOT NULL,
    gender VARCHAR NOT NULL,
    brand VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    prize REAL NOT NULL,
    type VARCHAR,
    image VARCHAR,
    date TIMESTAMP NOT NULL
);
CREATE TABLE IF NOT EXISTS accessories_logs(
    name VARCHAR NOT NULL,
    gender VARCHAR NOT NULL,
    brand VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    prize REAL NOT NULL,
    type VARCHAR,
    image VARCHAR,
    date TIMESTAMP NOT NULL
);
CREATE TABLE IF NOT EXISTS suplements_logs(
    name VARCHAR NOT NULL,
    brand VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    prize REAL NOT NULL,
    type VARCHAR,
    image VARCHAR,
    date TIMESTAMP NOT NULL
);

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS pgcrypto;