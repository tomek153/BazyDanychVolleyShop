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
    old_firstName VARCHAR NOT NULL,
    old_lastName  VARCHAR NOT NULL,
    old_email     VARCHAR NOT NULL,
    old_password  VARCHAR NOT NULL,
    new_firstName VARCHAR NOT NULL,
    new_lastName  VARCHAR NOT NULL,
    new_email     VARCHAR NOT NULL,
    new_password  VARCHAR NOT NULL,
    date TIMESTAMP NOT NULL
);
CREATE TABLE IF NOT EXISTS shoes_logs(
    old_name VARCHAR NOT NULL,
    old_gender VARCHAR NOT NULL,
    old_brand VARCHAR NOT NULL,
    old_description VARCHAR NOT NULL,
    old_prize REAL NOT NULL,
    old_image VARCHAR,
    new_name VARCHAR NOT NULL,
    new_gender VARCHAR NOT NULL,
    new_brand VARCHAR NOT NULL,
    new_description VARCHAR NOT NULL,
    new_prize REAL NOT NULL,
    new_image VARCHAR,
    date TIMESTAMP NOT NULL
);
CREATE TABLE IF NOT EXISTS clothes_logs(
    old_name VARCHAR NOT NULL,
    old_gender VARCHAR NOT NULL,
    old_brand VARCHAR NOT NULL,
    old_description VARCHAR NOT NULL,
    old_prize REAL NOT NULL,
    old_type VARCHAR,
    old_image VARCHAR,
    new_name VARCHAR NOT NULL,
    new_gender VARCHAR NOT NULL,
    new_brand VARCHAR NOT NULL,
    new_description VARCHAR NOT NULL,
    new_prize REAL NOT NULL,
    new_type VARCHAR,
    new_image VARCHAR,
    date TIMESTAMP NOT NULL
);
CREATE TABLE IF NOT EXISTS accessories_logs(
    old_name VARCHAR NOT NULL,
    old_gender VARCHAR NOT NULL,
    old_brand VARCHAR NOT NULL,
    old_description VARCHAR NOT NULL,
    old_prize REAL NOT NULL,
    old_type VARCHAR,
    old_image VARCHAR,
    new_name VARCHAR NOT NULL,
    new_gender VARCHAR NOT NULL,
    new_brand VARCHAR NOT NULL,
    new_description VARCHAR NOT NULL,
    new_prize REAL NOT NULL,
    new_type VARCHAR,
    new_image VARCHAR,
    date TIMESTAMP NOT NULL
);
CREATE TABLE IF NOT EXISTS supplements_logs(
    old_name VARCHAR NOT NULL,
    old_brand VARCHAR NOT NULL,
    old_description VARCHAR NOT NULL,
    old_prize REAL NOT NULL,
    old_type VARCHAR,
    old_image VARCHAR,
    new_name VARCHAR NOT NULL,
    new_brand VARCHAR NOT NULL,
    new_description VARCHAR NOT NULL,
    new_prize REAL NOT NULL,
    new_type VARCHAR,
    new_image VARCHAR,
    date TIMESTAMP NOT NULL
);

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS pgcrypto;