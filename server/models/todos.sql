-- From psql console connecting to a certain database
\c todos

-- Listing all the databases 
\l

-- Listing all the table in the path
\dt

-- Creating a table(database) from psql console
CREATE TABLE todos_table (
    id SERIAL PRIMARY KEY,
    item TEXT NOT NULL,
    priority TEXT,
    notes TEXT,
    duedate TIMESTAMP WITH TIME ZONE,
    completed boolean NOT NULL 
);

-- Populating the table
INSERT INTO todos_table (item,priority,notes, completed)
VALUES
('todo1','none','notes1',false),
('todo2','none','notes2',false),
('todo3','none','notes3',false);

-- Retrieving data from table
SELECT * FROM <table_name>;
SELECT <column> FROM <table_name> WHERE <condition>;

-- Updating the value of an already present query record
UPDATE <table_name> SET <columnN> = <valueN> WHERE <condition>;

-- Deleting recods present in the table
DELETE FROM <table_name> WHERE <condition>;

-- Deleting a table(database) from psql console
DROP TABLE <table_name>;
