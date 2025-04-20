DROP TABLE IF EXISTS Packages;
CREATE TABLE Packages (
    tracking_number integer PRIMARY KEY,
    sender_name VARCHAR(100),
    sender_address VARCHAR(255),
    receiver_name VARCHAR(100),
    receiver_address VARCHAR(255),
    weight DECIMAL(10, 2),
    cost_per_unit DECIMAL(10, 2),
    shipping_method VARCHAR(50),
    flat_fee DECIMAL(10, 2),
    status VARCHAR(50)
   
);