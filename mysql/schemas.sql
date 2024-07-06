-- Crea il database
CREATE DATABASE databaseV1;

-- Usa il database appena creato
USE databaseV1;

-- Crea la tabella "partners" con UUID generato automaticamente
CREATE TABLE partners (
    partner_id CHAR(36) PRIMARY KEY DEFAULT (UUID()),  -- UUID come ID univoco per ogni partner
    partner_name VARCHAR(100) NOT NULL,                -- Nome del partner
    partner_type ENUM('hotel', 'ristorante', 'altro') NOT NULL,  -- Tipo di partner
    latitude DECIMAL(10, 8),                           -- Latitudine
    longitude DECIMAL(11, 8),                          -- Longitudine
    count_bike INT DEFAULT 0                           -- Conteggio delle bici
);

-- Crea la tabella "bikes" con UUID generato automaticamente
CREATE TABLE bikes (
    bike_id CHAR(36) PRIMARY KEY DEFAULT (UUID()),     -- UUID come ID univoco per ogni bici
    bike_type VARCHAR(100) NOT NULL,                   -- Tipo di bici
    battery_level INT,                                 -- Livello della batteria
    latitude DECIMAL(10, 8),                           -- Latitudine
    longitude DECIMAL(11, 8),                          -- Longitudine
    partner_id CHAR(36),                               -- UUID del partner (chiave esterna)
    reserved ENUM('yes', 'no') DEFAULT 'no',           -- Stato di prenotazione
    count_run INT DEFAULT 0,                           -- Conteggio delle corse
    FOREIGN KEY (partner_id) REFERENCES partners(partner_id) -- Chiave esterna
);
