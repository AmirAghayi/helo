SELECT p.*, u.username "user" FROM "Posts" p
join "Users" u on p.user_id = u.id;