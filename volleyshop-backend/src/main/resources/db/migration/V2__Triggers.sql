-- Uzytkownicy
CREATE OR REPLACE FUNCTION users_log_insert()
returns trigger as $$
    BEGIN
        INSERT INTO users_logs VALUES('', '', '', '', new.firstName, new.lastName, new.email, new.password, now());
        return NEW;
    end;
$$
LANGUAGE plpgsql;

create trigger users_inserter
    before insert
    on users
    for each row
    execute procedure users_log_insert();

CREATE OR REPLACE FUNCTION users_log_update()
returns trigger as $$
    BEGIN
        if new.firstName<>old.firstName or new.lastName<>old.lastName or new.email<>old.email or new.password<>old.password THEN
            INSERT INTO users_logs VALUES(old.firstName, old.lastName, old.email, old.password, new.firstName, new.lastName, new.email, new.password, now());
        end if;
    return NEW;
end;
$$
LANGUAGE plpgsql;

create trigger users_updater
    before update
    on users
    for each row
    execute procedure users_log_update();

-- Obuwie
CREATE OR REPLACE FUNCTION shoes_log_insert()
returns trigger as $$
    BEGIN
        INSERT INTO shoes_logs VALUES('', '', '', '', 0.0, '', new.name, new.gender, new.brand, new.description, new.prize, new.image, now());
        return NEW;
    end;
$$
LANGUAGE plpgsql;

create trigger shoes_inserter
    before insert
    on shoes
    for each row
    execute procedure shoes_log_insert();

CREATE OR REPLACE FUNCTION shoes_log_update()
returns trigger as $$
    BEGIN
        if new.name<>old.name or new.gender<>old.gender or new.brand<>old.brand or new.description<>old.description or new.prize<>old.prize or new.image<>old.image THEN
            INSERT INTO shoes_logs VALUES(old.name, old.gender, old.brand, old.description, old.prize, old.image, new.name, new.gender, new.brand, new.description, new.prize, new.image, now());
        end if;
        return NEW;
    end;
$$
LANGUAGE plpgsql;

create trigger shoes_updater
    before update
    on shoes
    for each row
    execute procedure shoes_log_update();

-- Ubrania
CREATE OR REPLACE FUNCTION clothes_log_insert()
returns trigger as $$
    BEGIN
        INSERT INTO clothes_logs VALUES('', '', '', '', 0.0, '', '', new.name, new.gender, new.brand, new.description, new.prize, new.type, new.image, now());
        return NEW;
    end;
$$
LANGUAGE plpgsql;

create trigger clothes_inserter
    before insert
    on clothes
    for each row
    execute procedure clothes_log_insert();

CREATE OR REPLACE FUNCTION clothes_log_update()
returns trigger as $$
    BEGIN
        if new.name<>old.name or new.gender<>old.gender or new.brand<>old.brand or new.description<>old.description or new.prize<>old.prize or new.type<>old.type or new.image<>old.image THEN
            INSERT INTO clothes_logs VALUES(old.name, old.gender, old.brand, old.description, old.prize, old.type, old.image, new.name, new.gender, new.brand, new.description, new.prize, new.type, new.image, now());
        end if;
        return NEW;
    end;
$$
LANGUAGE plpgsql;

create trigger clothes_updater
    before update
    on clothes
    for each row
    execute procedure clothes_log_update();

-- Akcesoria
CREATE OR REPLACE FUNCTION accessories_log_insert()
returns trigger as $$
BEGIN
INSERT INTO accessories_logs VALUES('', '', '', '', 0.0, '', '', new.name, new.gender, new.brand, new.description, new.prize, new.type, new.image, now());
return NEW;
end;
$$
LANGUAGE plpgsql;

create trigger accessories_inserter
    before insert
    on accessories
    for each row
    execute procedure accessories_log_insert();

CREATE OR REPLACE FUNCTION accessories_log_update()
returns trigger as $$
    BEGIN
        if new.name<>old.name or new.gender<>old.gender or new.brand<>old.brand or new.description<>old.description or new.prize<>old.prize or new.type<>old.type or new.image<>old.image THEN
            INSERT INTO accessories_logs VALUES(old.name, old.gender, old.brand, old.description, old.prize, old.type, old.image, new.name, new.gender, new.brand, new.description, new.prize, new.type, new.image, now());
        end if;
        return NEW;
    end;
$$
LANGUAGE plpgsql;

create trigger accessories_updater
    before update
    on accessories
    for each row
    execute procedure accessories_log_update();

-- Suplementy
CREATE OR REPLACE FUNCTION supplements_log_insert()
returns trigger as $$
BEGIN
INSERT INTO supplements_logs VALUES('', '', '', 0.0, '', '', new.name, new.brand, new.description, new.prize, new.type, new.image, now());
return NEW;
end;
$$
LANGUAGE plpgsql;

create trigger supplements_inserter
    before insert
    on supplements
    for each row
    execute procedure supplements_log_insert();

CREATE OR REPLACE FUNCTION supplements_log_update()
returns trigger as $$
    BEGIN
        if new.name<>old.name or new.description<>old.description or new.prize<>old.prize or new.type<>old.type or new.image<>old.image THEN
            INSERT INTO supplements_logs VALUES(old.name, old.brand, old.description, old.prize, old.type, old.image, new.name, new.brand, new.description, new.prize, new.type, new.image, now());
        end if;
        return NEW;
    end;
$$
LANGUAGE plpgsql;

create trigger supplements_updater
    before update
    on supplements
    for each row
    execute procedure supplements_log_update();