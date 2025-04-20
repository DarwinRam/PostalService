CREATE TABLE Sender (
            sender_id SERIAL PRIMARY KEY,
            name VARCHAR(100),
            address VARCHAR(255)
        );

        -- Receiver table
        CREATE TABLE Receiver (
            receiver_id SERIAL PRIMARY KEY,
            name VARCHAR(100),
            address VARCHAR(255)
        );

        -- Packages table
        CREATE TABLE Packages (
            tracking_number SERIAL PRIMARY KEY,
            sender_id INT,
            receiver_id INT,
            weight DECIMAL(10, 2),
            cost_per_unit DECIMAL(10, 2),
            shipping_method VARCHAR(50),
            flat_fee DECIMAL(10, 2),
            status VARCHAR(50),
            FOREIGN KEY (sender_id) REFERENCES Sender(sender_id),
            FOREIGN KEY (receiver_id) REFERENCES Receiver(receiver_id)
        );

        CREATE TABLE Packages (
    tracking_number SERIAL PRIMARY KEY,
    sender_name VARCHAR(100),
    sender_address VARCHAR(255),
    receiver_name VARCHAR(100),
    receiver_address VARCHAR(255),
    weight DECIMAL(10, 2),
    cost_per_unit DECIMAL(10, 2),
    shipping_method VARCHAR(50),
    flat_fee DECIMAL(10, 2),
    status VARCHAR(50),
    type VARCHAR(50) -- e.g., 'One-Day', 'Two-Day'
);
