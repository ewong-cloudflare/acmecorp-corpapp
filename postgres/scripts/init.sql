CREATE TABLE Employee (
    id TEXT PRIMARY KEY,            -- Employee id
    name TEXT NOT NULL,             -- Fullname
    position TEXT NOT NULL,         -- Job title
    email TEXT                      -- Employee work email
    created_at TIMESTAMP,           -- Unix epoch timestamp for creation (defaults to current time)
    updated_at TIMESTAMP            -- Unix epoch timestamp for last update (defaults to current time)