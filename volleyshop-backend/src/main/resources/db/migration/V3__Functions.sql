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