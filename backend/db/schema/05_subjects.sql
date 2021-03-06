
DROP TABLE IF EXISTS subjects CASCADE;
CREATE TABLE subjects (
  id SERIAL PRIMARY KEY NOT NULL,
  tutor_id INTEGER REFERENCES tutors(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL
);
