--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS userdata (
  id   INTEGER PRIMARY KEY,
  userId INTEGER NOT NULL UNIQUE,
  data TEXT NOT NULL CHECK (json_valid(data))
);

CREATE TABLE IF NOT EXISTS globalsettings (
  id   INTEGER PRIMARY KEY,
  data TEXT    NOT NULL CHECK (json_valid(data))
);

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DROP TABLE IF EXISTS globalsettings;
DROP TABLE IF EXISTS userdata;