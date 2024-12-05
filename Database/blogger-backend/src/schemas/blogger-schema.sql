CREATE TABLE users (
  user_id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  username VARCHAR(30) UNIQUE,
  password TEXT NOT NULL,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email TEXT NOT NULL
);

CREATE TABLE posts (
  post_id TEXT PRIMARY KEY,
  user_id uuid REFERENCES users(user_id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  title_plaintext TEXT,
  title_html TEXT,
  body_plaintext TEXT,
  body_html TEXT,
  slug TEXT
);

CREATE TABLE tags (
  tag VARCHAR(25) PRIMARY KEY CHECK (tag = lower(tag) AND position('#' IN tag) = 1)
);

CREATE TABLE comments (
  comment_id SERIAL PRIMARY KEY,
  user_id uuid REFERENCES users(user_id) ON DELETE CASCADE,
  post_id TEXT REFERENCES posts(post_id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  body TEXT
);

CREATE TABLE posts_comments (
  post_id TEXT REFERENCES posts(post_id) ON DELETE CASCADE,
  comment_id INTEGER REFERENCES comments(comment_id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, comment_id)
);

-- Create the posts_tags union table
CREATE TABLE posts_tags (
  post_id TEXT REFERENCES posts(post_id) ON DELETE CASCADE,
  tag TEXT REFERENCES tags(tag) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag)
);