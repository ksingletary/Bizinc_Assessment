\echo 'Delete and recreate blogger db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE blogger;
CREATE DATABASE blogger;
\connect blogger

\i blogger-schema.sql

\echo 'Delete and recreate blogger_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

\i blogger-schema.sql
