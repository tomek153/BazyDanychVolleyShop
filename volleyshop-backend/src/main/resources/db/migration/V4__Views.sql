-- Shoes
CREATE VIEW shoes_men AS
    SELECT name, gender, brand, description, prize, image FROM shoes WHERE gender = 'Męskie';
CREATE VIEW shoes_women AS
    SELECT name, gender, brand, description, prize, image FROM shoes WHERE gender = 'Damskie';
CREATE VIEW shoes_junior AS
    SELECT name, gender, brand, description, prize, image FROM shoes WHERE gender = 'Junior';

-- Clothes
CREATE VIEW clothes_men AS
    SELECT name, gender, brand, description, prize, type, image FROM clothes WHERE gender = 'Męskie';
CREATE VIEW clothes_women AS
    SELECT name, gender, brand, description, prize, type, image FROM clothes WHERE gender = 'Damskie';

-- Accessories
CREATE VIEW accessories_balls AS
    SELECT name, gender, brand, description, prize, type, image FROM accessories WHERE type = 'Piłka';
CREATE VIEW accessories_bags AS
    SELECT name, gender, brand, description, prize, type, image FROM accessories WHERE type IN('Torba', 'Plecak');
CREATE VIEW accessories_knee_pads AS
    SELECT name, gender, brand, description, prize, type, image FROM accessories WHERE type = 'Nakolanniki';
CREATE VIEW accessories_sleeves AS
    SELECT name, gender, brand, description, prize, type, image FROM accessories WHERE type = 'Rękawki siatkarskie';
CREATE VIEW accessories_socks AS
    SELECT name, gender, brand, description, prize, type, image FROM accessories WHERE type = 'Skarpetki';
CREATE VIEW accessories_equipment AS
    SELECT name, gender, brand, description, prize, type, image FROM accessories WHERE type = 'Sprzęt do ćwiczeń';
CREATE VIEW accessories_other AS
    SELECT name, gender, brand, description, prize, type, image FROM accessories WHERE type = 'Inne';