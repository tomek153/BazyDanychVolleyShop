-- Uzytkownicy
CREATE OR REPLACE FUNCTION add_user(pass_firstName varchar, pass_lastName varchar, pass_email varchar, pass_password varchar)
returns integer as $$
    DECLARE
        total integer;
    BEGIN
        SELECT COUNT(*) into total FROM users WHERE email = pass_email;
        if total = 0 then
            INSERT INTO users(id, firstname, lastname, email, password) VALUES(uuid_generate_v4(), pass_firstName, pass_lastName, pass_email, md5(pass_password));
        end if;
        return total;
    end;
$$
LANGUAGE plpgsql;

-- Buty
CREATE OR REPLACE FUNCTION add_shoe(pass_name varchar, pass_gender varchar, pass_brand varchar, pass_description varchar, pass_prize real, pass_image varchar)
returns integer as $$
    DECLARE
        total integer;
    BEGIN
        SELECT COUNT(*) into total FROM shoes WHERE name = pass_name OR image = pass_image;
        if total = 0 then
            INSERT INTO shoes(name, gender, brand, description, prize, image) VALUES(pass_name, pass_gender, pass_brand, pass_description, pass_prize, pass_image);
        end if;
        return total;
    end;
$$
LANGUAGE plpgsql;

-- Ubrania
CREATE OR REPLACE FUNCTION add_clothe(pass_name varchar, pass_gender varchar, pass_brand varchar, pass_description varchar, pass_prize real, pass_type varchar, pass_image varchar)
returns integer as $$
    DECLARE
        total integer;
    BEGIN
        SELECT COUNT(*) into total FROM clothes WHERE name = pass_name OR image = pass_image;
        if total = 0 then
            INSERT INTO clothes(name, gender, brand, description, prize, type, image) VALUES(pass_name, pass_gender, pass_brand, pass_description, pass_prize, pass_type, pass_image);
        end if;
        return total;
    end;
$$
LANGUAGE plpgsql;

-- Akcesoria
CREATE OR REPLACE FUNCTION add_accessorie(pass_name varchar, pass_gender varchar, pass_brand varchar, pass_description varchar, pass_prize real, pass_type varchar, pass_image varchar)
returns integer as $$
    DECLARE
total integer;
BEGIN
SELECT COUNT(*) into total FROM accessories WHERE name = pass_name OR image = pass_image;
if total = 0 then
            INSERT INTO accessories(name, gender, brand, description, prize, type, image) VALUES(pass_name, pass_gender, pass_brand, pass_description, pass_prize, pass_type, pass_image);
end if;
return total;
end;
$$
LANGUAGE plpgsql;

-- Suplementy
CREATE OR REPLACE FUNCTION add_supplement(pass_name varchar, pass_brand varchar, pass_description varchar, pass_prize real, pass_type varchar, pass_image varchar)
returns integer as $$
    DECLARE
total integer;
BEGIN
SELECT COUNT(*) into total FROM supplements WHERE name = pass_name OR image = pass_image;
if total = 0 then
            INSERT INTO supplements(name, brand, description, prize, type, image) VALUES(pass_name, pass_brand, pass_description, pass_prize, pass_type, pass_image);
end if;
return total;
end;
$$
LANGUAGE plpgsql;
