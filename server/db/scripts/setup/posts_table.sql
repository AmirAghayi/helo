CREATE TABLE "Posts" (
    id SERIAL PRIMARY KEY,
    title TEXT,
    imageUrl TEXT,
    content TEXT,
    user_id INT REFERENCES "Users"(id) ON DELETE CASCADE
);