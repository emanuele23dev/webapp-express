# Films App

Il nostro obbiettivo é creare una semplice app gestionale per inserire `film` e `recensioni pubbliche`.

# Database structure

- table: movies
- table: reviews

# movies table

```sql
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `director` VARCHAR(255) NOT NULL,
  `genre` VARCHAR(255) NOT NULL,
  `release_year` YEAR NOT NULL,
  `abstract` TEXT(500) NOT NULL,
  `image` VARCHAR(255) NULL
  `created_at` TIMESTAMP NOT NULL,
  `updated_at` TIMESTAMP NOT NULL
```

# reviews table

```sql
  `id` INT NOT NULL AUTO_INCREMENT,
  `movie_id` INT UNSIGNED NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `vote` TINYINT(5) NOT NULL,
  `text` TEXT NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  `updated_at` TIMESTAMP NOT NULL
```
