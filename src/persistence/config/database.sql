CREATE DATABASE domaindb;

CREATE TABLE scamscores(
    id SERIAL PRIMARY KEY,
    domainname CHAR(100) NOT NULL,
    scamscore INT NOT NULL,
    createddate timestamp default NULL
);

