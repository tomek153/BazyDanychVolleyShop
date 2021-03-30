-- Uzytkownicy
CREATE OR REPLACE FUNCTION users_log()
returns trigger as $$
    BEGIN
        INSERT INTO users_logs VALUES(new.firstName, new.lastName, new.email, new.password, now());
        return NEW;
    end;
$$
LANGUAGE plpgsql;

create trigger users_changer
    before insert
    on users
    for each row
    execute procedure users_log();

-- Obuwie
CREATE OR REPLACE FUNCTION shoes_log()
returns trigger as $$
    BEGIN
        INSERT INTO shoes_logs VALUES(new.name, new.gender, new.brand, new.description, new.prize, new.image, now());
        return NEW;
    end;
$$
LANGUAGE plpgsql;

create trigger shoes_changer
    before insert
    on shoes_logs
    for each row
    execute procedure shoes_log();

-- Ubrania
CREATE OR REPLACE FUNCTION clothes_log()
returns trigger as $$
BEGIN
INSERT INTO clothes_logs VALUES(new.name, new.gender, new.brand, new.description, new.prize, new.type, new.image, now());
return NEW;
end;
$$
LANGUAGE plpgsql;

create trigger clothes_changer
    before insert
    on clothes_logs
    for each row
    execute procedure clothes_log();

-- Akcesoria
CREATE OR REPLACE FUNCTION accessories_log()
returns trigger as $$
BEGIN
INSERT INTO accessories_logs VALUES(new.name, new.gender, new.brand, new.description, new.prize, new.type, new.image, now());
return NEW;
end;
$$
LANGUAGE plpgsql;

create trigger accessories_changer
    before insert
    on accessories_logs
    for each row
    execute procedure accessories_log();

-- Suplementy
CREATE OR REPLACE FUNCTION suplements_log()
returns trigger as $$
BEGIN
INSERT INTO suplements_logs VALUES(new.name, new.brand, new.description, new.prize, new.type, new.image, now());
return NEW;
end;
$$
LANGUAGE plpgsql;

create trigger suplements_changer
    before insert
    on suplements_logs
    for each row
    execute procedure suplements_log();