DROP TABLE IF EXISTS customers, records;

CREATE TABLE customers (
    id BIGSERIAL NOT NULL UNIQUE,
    PRIMARY KEY (id),
    name VARCHAR(150) NOT NULL
);

CREATE TABLE records (
    id BIGSERIAL NOT NULL UNIQUE,
    PRIMARY KEY (id),
    amount FLOAT NOT NULL,
    description TEXT,
    customer_id BIGINT NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    date TIMESTAMP NOT NULL DEFAULT(NOW())
);

INSERT INTO customers (name) values ('Store 1');
INSERT INTO customers (name) values ('Store 2');
INSERT INTO customers (name) values ('Store 3');